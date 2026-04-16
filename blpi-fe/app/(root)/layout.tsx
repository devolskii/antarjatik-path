import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-[#222222] ">
      {/*<main className="bg-[#DB261D] ">*/}
      <HeaderWrapper />
      {/*className="w90 mx-auto "*/}
      <div>{children}</div>
      <Footer />
    </main>
  );
}
