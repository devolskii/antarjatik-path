import { ListFilter, Search } from "lucide-react";
import Header from "./Header";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Separator } from "./ui/separator";
const Navbar = () => {
  return (
    <header className="">
      <Header />
      <Separator className="mb-4 md:hidden" />
      <Menubar className="hidden !rounded-none md:flex justify-around font-sans h-12">
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">বিষয়</MenubarTrigger>
          <MenubarContent className="rounded-none">
            <MenubarItem>বিশ্লেষণ/তত্ত্ব</MenubarItem>
            <MenubarItem>বিবৃতি</MenubarItem>
            <MenubarItem>আন্তর্জাতিক পরিস্থিতি</MenubarItem>
            <MenubarItem>চিঠি-পত্র</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>বছর অনুযায়ী</MenubarSubTrigger>
              <MenubarSubContent className="rounded-none">
                <MenubarItem>২০২৫</MenubarItem>
                <MenubarItem>২০২৪</MenubarItem>
                <MenubarItem>২০২৩</MenubarItem>
                <MenubarItem>২০২২</MenubarItem>
                <MenubarItem>২০২১</MenubarItem>
                <MenubarItem>২০২০</MenubarItem>
                <MenubarItem>২০১৯</MenubarItem>
                <MenubarItem>২০১৮</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            বই/পত্রিকা PDF
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
          <InputGroup className="hidden lg:flex max-w-sm rounded-none">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </MenubarMenu>{" "}
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            আমাদের সম্পর্কে
          </MenubarTrigger>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">
            English
          </MenubarTrigger>
        </MenubarMenu>
        <Separator orientation="vertical" />
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg flex gap-2 justify-center">
            অনুসারে <ListFilter />
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};
export default Navbar;
