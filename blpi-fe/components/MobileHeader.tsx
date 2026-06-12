"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import { Slug } from "@/sanity/types";
import { ChevronsUpDown, Search } from "lucide-react";
import { Menu } from "lucide-react";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";

type Tag = { _id: string; name: string; slug: Slug };
type Year = { _id: string; name: string; slug: Slug };

interface HeaderProps {
  tags: Tag[];
  years: Year[];
}

const MobileHeader = ({ tags, years }: HeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="h-23 w-full flex justify-between items-center px-2 bg-[#DB261D]">
        <div className="">
          <Link href="/">
            <Image
              src="/mobile_header.jpeg"
              alt="BLPI Logo Header"
              width={280}
              height={75}
            />
          </Link>
        </div>

        <div className="grow text-white flex justify-around">
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            aria-expanded={showSearch}
            aria-label={showSearch ? "Hide search" : "Show search"}
          >
            <Search className="stroke-[4px] size-8" />
          </button>
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <button
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                aria-expanded={showMenu}
                aria-label={showMenu ? "Hide Menu" : "Show Menu"}
              >
                <Menu className="stroke-[4px] size-8" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#DB261D] text-white">
              <DrawerHeader className="">নেভিগেশন মেনু</DrawerHeader>
              <Collapsible>
                <div className="flex items-center justify-between gap-4 px-4">
                  <h2 className="font-bold">বিষয়</h2>
                  <CollapsibleTrigger>
                    <Button variant="ghost" size="icon" className="size-8">
                      <ChevronsUpDown />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="flex flex-col gap-2 ml-2">
                  {tags.map((tag) => (
                    <Link key={tag._id} href={`/tag/${tag.slug?.current}`}>
                      <Button variant="link" className="text-white">
                        {tag.name}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <div className="flex items-center justify-between gap-4 px-4 mt-4">
                  <h2 className="font-bold">বছর অনুযায়ী</h2>
                  <CollapsibleTrigger>
                    <Button variant="ghost" size="icon" className="size-8">
                      <ChevronsUpDown />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="flex flex-col gap-2 ml-2">
                  {years.map((year) => (
                    <Link key={year._id} href={`/year/${year.slug?.current}`}>
                      <Button variant="link" className="text-white">
                        {year.name}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <h2 className="font-bold ml-4 mt-4">বই/পত্রিকা PDF</h2>
              <h2 className="font-bold ml-4 mt-4">আমাদের সম্পর্কে</h2>
              <h2 className="font-bold ml-4 mt-4">English</h2>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          showSearch ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`transform transition-all duration-300 ease-out ${
            showSearch ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <SearchBar mobile={true} />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
