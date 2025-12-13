import HeaderWrapper from "@/components/HeaderWrapper";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <HeaderWrapper />
      <div className="w90 mx-auto">{children}</div>
    </main>
  );
}
