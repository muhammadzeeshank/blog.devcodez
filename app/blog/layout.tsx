export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="container-wrapper">
    //   <div className="container">{children}</div>
    // </div>
    <>{children}</>
  );
}
