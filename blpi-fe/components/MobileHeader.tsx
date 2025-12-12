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

import { ScrollSenseHeader } from "react-scroll-sense-header";
import "react-scroll-sense-header/dist/styles.css";

type Tag = { _id: string; name: string; slug: Slug };
type Year = { _id: string; name: string; slug: Slug };

interface HeaderProps {
  tags: Tag[];
  years: Year[];
}

const MobileHeader = ({ tags, years }: HeaderProps) => {
  return (
    <div className="">
      <ScrollSenseHeader className="left-0" boxShadow="none">
        <div className="bg-white">
          <div className="flex justify-between items-center">
            <div className="mt-1.5 md:hidden">
              <Navbar mobile={true} tags={tags} years={years} />
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/header.jpeg"
                  alt="header"
                  width={300}
                  height={50}
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
    </div>
  );
};

export default MobileHeader;
