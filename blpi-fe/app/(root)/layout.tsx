import HeaderWrapper from "@/components/HeaderWrapper";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="w90 mx-auto">
        <HeaderWrapper />
        {children}
      </div>
    </main>
  );
}
