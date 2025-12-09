"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { ScrollSenseHeader } from "react-scroll-sense-header";
import { Slug } from "@/sanity/types";
import "react-scroll-sense-header/dist/styles.css";

type Tag = { _id: string; name: string; slug: Slug };
type Year = { _id: string; name: string; slug: Slug };

interface HeaderProps {
  tags: Tag[];
  years: Year[];
}

const Header = ({ tags, years }: HeaderProps) => {
  return (
    <div>
      <div className="md:hidden">
        <ScrollSenseHeader className="left-0" boxShadow="none">
          {/* sticky top-0 with z-[100] - Header sticks at the very top */}
          <header className="bg-white">
            <div className="flex items-center justify-center">
              <div className="mt-1.5 md:hidden ">
                <Navbar mobile={true} tags={tags} years={years} />
              </div>
              <div>
                <Link href="/">
                  <Image
                    src="/header.jpeg"
                    alt="header"
                    width={400}
                    height={70}
                  />
                </Link>
              </div>
            </div>
            <div className="mb-2">
              <p className="font-serif text-sm text-center">
                বলশেভিক লেনিনবাদী পার্টির মুখপত্র
              </p>
              <hr className="mt-3" />
            </div>
            <div className="hidden md:block">
              <Navbar mobile={false} tags={tags} years={years} />
            </div>
            <div>
              <SearchBar mobile={true} />
            </div>
          </header>
        </ScrollSenseHeader>
      </div>
      <div className="hidden md:block">
        <header className="bg-white z-100">
          <div className="flex items-center justify-center">
            <div className="mt-1.5 md:hidden">
              <Navbar mobile={true} tags={tags} years={years} />
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/header.jpeg"
                  alt="header"
                  width={400}
                  height={70}
                />
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <p className="font-serif text-sm text-center">
              বলশেভিক লেনিনবাদী পার্টির মুখপত্র
            </p>
            <hr className="mt-3" />
          </div>
          <div className="hidden md:block">
            <Navbar mobile={false} tags={tags} years={years} />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
