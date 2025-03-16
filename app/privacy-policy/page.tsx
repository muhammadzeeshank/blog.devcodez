import { BreadcrumbWithCustomSeparator } from "@/components/bread-crumb";
import Container from "@/components/container";
import Header from "@/components/Header";
import { CustomMDX } from "@/components/mdx";
import { getPrivacyPolicy } from "../blog/utils";

export default function Page() {
  console.log("getpp:", getPrivacyPolicy());

  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");

  return (
    <>
      <Header>
        <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
          Privacy Policy
        </h1>
      </Header>
      <Container>
        <article>
          {post == undefined ? "" : <CustomMDX source={post} />}
        </article>
      </Container>
    </>
  );
}
