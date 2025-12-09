"use client";
import { List } from "lucide-react";
import { useEffect, useState, useRef } from "react";
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
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const header = document.querySelector("header");
    headerRef.current = header as HTMLElement;

    if (header) setHeaderHeight(header.offsetHeight);

    const checkHeaderPosition = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();

      // Header is considered visible ONLY when top is 0
      setIsHeaderVisible(rect.top === 0);
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsSticky(currentY > 0);

      // If user is scrolling up (first up scroll), show the title immediately
      if (currentY < lastScrollY.current) {
        setIsHeaderVisible(true);
      } else {
        // when scrolling down, rely on actual header position
        checkHeaderPosition();
      }

      lastScrollY.current = currentY;
    };

    // Run once + add listeners
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkHeaderPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkHeaderPosition);
    };
  }, []);

  return (
    <div
      className="flex items-center gap-x-3 xl:relative"
      style={{
        position: "sticky",
        top: isHeaderVisible ? `${headerHeight}px` : "0px",
        backgroundColor: "white",
        zIndex: 50,
        transition: "top 0.2s ease",
      }}
    >
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
      ) : null}

      <div id="sticky-title" className="transition-all duration-300">
        <h1
          className={`font-serif font-bold mt-4 mb-3 transform transition-all duration-300
            ${isSticky ? "scale-90 text-lg" : "scale-100 text-2xl md:text-3xl xl:text-4xl"}
            xl:transform-none xl:transition-none`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
