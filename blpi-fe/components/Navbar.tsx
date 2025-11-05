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
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";
import { Slug } from "@/sanity/types";

const TOPIC_QUERY = defineQuery(`*[_type=="tag"]{_id, name, slug}`);
const YEAR_QUERY = defineQuery(`
  *[_type=="year"]|order(name desc){
    _id, 
    name,
    slug,
  }
`);

const Navbar = async () => {
  const tags = await client.fetch(TOPIC_QUERY);
  const years = await client.fetch(YEAR_QUERY);

  return (
    <header className="">
      <Header />
      <Separator className="mb-4 md:hidden" />
      <Menubar className="hidden !rounded-none md:flex justify-around font-sans h-12">
        <MenubarMenu>
          <MenubarTrigger className="text-sm xl:text-lg ">বিষয়</MenubarTrigger>
          <MenubarContent className="rounded-none">
            {tags.map((tag: { _id: string; name: string; slug: Slug }) => (
              <Link key={tag._id} href={`/tag/${tag.slug?.current}`}>
                <MenubarItem>{tag.name}</MenubarItem>
              </Link>
            ))}
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>বছর অনুযায়ী</MenubarSubTrigger>
              <MenubarSubContent className="rounded-none">
                {years.map(
                  (year: { _id: string; name: string; slug: Slug }) => (
                    <Link key={year._id} href={`/year/${year.slug.current}`}>
                      <MenubarItem>{year.name}</MenubarItem>
                    </Link>
                  )
                )}
              </MenubarSubContent>
            </MenubarSub>
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
