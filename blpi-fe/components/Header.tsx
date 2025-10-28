import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

const Header = () => {
  return (
    <header className="flex items-top justify-center">
      <div className="mt-1.5 ">
        <Menubar className="!rounded-none md:hidden border-none ">
          <MenubarMenu>
            <MenubarTrigger className="rounded-none">
              <Menu />
            </MenubarTrigger>
            <MenubarContent className="rounded-none">
              <MenubarItem>বিশ্লেষণ/তত্ত্ব</MenubarItem>
              <MenubarItem>বিবৃতি</MenubarItem>{" "}
              <MenubarItem>আমাদের সম্পর্কে</MenubarItem>{" "}
              <MenubarItem>বই/পত্রিকা</MenubarItem>{" "}
              <InputGroup className="rounded-none border">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>
              <MenubarItem disabled>English</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex flex-col ">
        <div>
          <Link href="/">
            <Image src="/header.jpeg" alt="header" width={400} height={70} />
          </Link>
        </div>
        <div className="mb-2">
          <p className="font-serif text-sm text-center">
            বলশেভিক লেনিনবাদী পার্টির মুখপত্র
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
