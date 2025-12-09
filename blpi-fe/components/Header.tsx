import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-center">
        <div className="mt-1.5 md:hidden">
          <Navbar mobile={true} />
        </div>
        <div>
          <Link href="/">
            <Image src="/header.jpeg" alt="header" width={400} height={70} />
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
        <Navbar mobile={false} />
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
