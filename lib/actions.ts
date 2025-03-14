"use server";
import { db } from "@/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { promises as dns } from "dns";

export async function validateEmailAddress(emailAddress: string) {
  const invalidDomains = [
    "tempmail.com",
    "example.com",
    "email.com",
    "eamil.com",
    "test.com",
  ];
  const [domain] = emailAddress.split("@");

  // Example custom logic: Ensure domain exists and isn't blacklisted
  if (invalidDomains.includes(domain)) {
    return false; // Invalid if domain is blacklisted
  }

  try {
    const mxRecords = await dns.resolveMx(domain);

    if (!mxRecords || mxRecords.length === 0) {
      return false;
    }
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}
const FormSchema = z.object({
  id: z.number(),
  email: z
    .string()
    .email({ message: "A valid Email is required." })
    .refine(validateEmailAddress, {
      message: "Email is invalid",
    }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};
export async function createSubscriber(prevState: State, formData: FormData) {
  const validatedField = await CreateSubscriber.safeParseAsync({
    email: formData.get("email"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is Required",
    };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({
      data: {
        email: email,
      },
    });
    revalidatePath("/");
    return { message: "Thank you for Subscribing!" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return {
            message: "You're already subscribed! 🎉",
          };
        }
      }
    }

    return { message: "Database Error: Failed to create Subscriber." };
  }
}
