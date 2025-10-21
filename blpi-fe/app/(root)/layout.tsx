import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="w90 mx-auto">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
