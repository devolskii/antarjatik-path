import Header from "./Header";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

const Navbar = () => {
  return (
    <header>
      <Header />
      <Menubar className="text-sm flex justify-center font-serif">
        <MenubarMenu>
          <MenubarTrigger>বিশ্লেষণ</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>তত্ত্ব</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>আমাদের সম্পর্কে</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>বই/পত্রিকা</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>English</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};
export default Navbar;
