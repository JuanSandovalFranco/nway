import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";

const links = ["ropa de moda", "chaquetas", "camisetas", "buzos"];
const Header = () => {
  return (
    <header className="w-screen h-20 flex items-center justify-around max-w-[1400px]">
      <Link href="/">
        <Image src="/logo.png" width={180} height={80} alt="logo northway" />
      </Link>
      <nav className="flex justify-center text-md capitalize">
        {links.map((l) => (
          <Link
            className="py-2 px-4 transition duration-150 hover:font-bold"
            key={l}
            href={`/${l}`}
          >
            {l}
          </Link>
        ))}
      </nav>

      <div className="flex gap-2">
        <Link
          href="/profile"
          className="p-3 rounded-xl transition duration-150 hover:bg-gray-200 flex items-center"
        >
          <BiUserCircle className="text-3xl" />
        </Link>
        <Link
          href="/shopping-bag"
          className="p-3 rounded-xl transition duration-150 hover:bg-gray-200"
        >
          <FiShoppingBag className="text-3xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
