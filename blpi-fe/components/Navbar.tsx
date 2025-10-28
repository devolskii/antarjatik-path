import { Search } from "lucide-react";
import Header from "./Header";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Separator } from "./ui/separator";
const Navbar = () => {
  return (
    <header>
      <Header />
      <Separator className="mb-4 md:hidden" />
      <Menubar className="hidden !rounded-none md:flex justify-center font-sans h-12">
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            বিশ্লেষণ/তত্ত্ব
          </MenubarTrigger>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            বিবৃতি
          </MenubarTrigger>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            আমাদের সম্পর্কে
          </MenubarTrigger>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            বই/পত্রিকা
          </MenubarTrigger>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="lg:hidden rounded-none">
            <Search className="" />
          </MenubarTrigger>
          <MenubarContent className="rounded-none">
            <InputGroup className="rounded-none">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </MenubarContent>
          <InputGroup className="hidden lg:flex max-w-xs rounded-none">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            English
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};
export default Navbar;
