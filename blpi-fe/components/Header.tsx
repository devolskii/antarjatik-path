import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col items-center">
        <Link href="/">
          <Image src="/header.jpeg" alt="header" width={400} height={70} />
        </Link>
        <div className="mb-2">
          <p className="font-serif text-sm text-center">
            বলশেভিক লেনিনবাদী পার্টির মুখপত্র
          </p>
        </div>
      </header>
    </div>
  );
};
export default Header;
