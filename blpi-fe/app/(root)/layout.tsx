import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="w90 mx-auto">
        <Header />
        {children}
      </div>
    </main>
  );
}
