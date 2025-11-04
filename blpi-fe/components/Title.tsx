"use client";
import { List } from "lucide-react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { TOCType } from "@/sanity/types";
import TOCMobile from "./TOCMobile";

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
    <div className="flex items-center gap-x-3 sticky top-0 bg-white xl:relative">
      {headings?.length ? (
        <div className="xl:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <List />
              </button>
            </DropdownMenuTrigger>
            <TOCMobile headings={headings} />
          </DropdownMenu>
        </div>
      ) : (
        ""
      )}
      <div
        id="sticky-header"
        className={`sticky top-0 bg-white z-50 transition-all duration-300`}
      >
        <h1
          className={`transform transition-all duration-300 ${isSticky ? "scale-90" : "scale-100"} ${isSticky ? "text-lg" : "text-2xl md:text-3xl xl:text-4xl"} font-bold mt-4 mb-3 xl:transform-none xl:transition-none`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
