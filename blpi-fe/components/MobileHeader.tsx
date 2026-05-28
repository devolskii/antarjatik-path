"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import { Slug } from "@/sanity/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";

import { ScrollSenseHeader } from "react-scroll-sense-header";
import "react-scroll-sense-header/dist/styles.css";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

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
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-label={showMenu ? "Hide Menu" : "Show Menu"}
          >
            <Menu className="stroke-[4px] size-8" />
          </button>
        </div>
        {/*
    <div className="">
      <ScrollSenseHeader boxShadow="none">
        <div className="bg-white pb-1 w90 mx-auto">
          <div className="flex justify-between items-center">
            <div className="mt-1.5 md:hidden">
              <Navbar mobile={true} tags={tags} years={years} />
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/header.jpeg"
                  alt="header"
                  width={200}
                  height={30}
                />
              </Link>
            </div>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Search />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="z-1000 rounded-none p-0 border-none shadow-none"
                >
                  <SearchBar mobile={true} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mb-2 mx-auto">
            <p className="font-serif text-sm text-center">
              বলশেভিক লেনিনবাদী পার্টির মুখপত্র
            </p>
          </div>
        </div>
      </ScrollSenseHeader>
    </div> */}
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
      <MobileMenu open={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
};

export default MobileHeader;
