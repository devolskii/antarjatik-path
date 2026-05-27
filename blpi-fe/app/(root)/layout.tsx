import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen flex flex-col">
      <HeaderWrapper />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
