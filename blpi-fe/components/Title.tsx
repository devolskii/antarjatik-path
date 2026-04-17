"use client";
import { List } from "lucide-react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { TOCType } from "@/sanity/types";
import TOCMobile from "./TOCMobile";
import Image from "next/image";
import Link from "next/link";

export default function Title({
  title,
  headings,
}: {
  title: string;
  headings?: TOCType[];
}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("sticky-header");
      if (header) {
        const { top } = header.getBoundingClientRect();
        setIsSticky(top <= 0); // true when stuck to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sticky-header"
      className={`${!isSticky ? "h-auto w90 mx-auto bg-white text-[#DB261D]" : "h-10 w-full bg-[#DB261D] text-white px-2"} flex items-center gap-x-3 sticky top-0 z-50 xl:relative`}
    >
      {isSticky ? (
        <Link href="/">
          <Image
            src="/yellogo.svg"
            alt="logo"
            width={25}
            height={25}
            priority
          />
        </Link>
      ) : (
        ""
      )}
      <div className={`transition-all duration-300 flex-1 min-w-0`}>
        <h1
          className={`font-serif transition-all duration-300 ${isSticky ? "truncate" : "mt-2 text-2xl md:text-3xl xl:text-4xl"} font-bold xl:transform-none xl:transition-none`}
        >
          {title}
        </h1>
      </div>

      <div className={``}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <List className="mt-1 size-6 stroke-3" />
            </button>
          </DropdownMenuTrigger>
          {headings?.length ? <TOCMobile headings={headings} /> : ""}
        </DropdownMenu>
      </div>
    </div>
  );
}
