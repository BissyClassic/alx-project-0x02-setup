import link from 'next/link';
import home from "@/pages/home";
import about from "@/pages/about";
"import link frrom"

const Header: React.FC = () => {
    return(
      <header className="bg-blue-400 text-white px-2 py-4">
        <div className="flex justify-between px-4 items-center">
       <h2 className="font-bold text-2x1">
      Bissy Classic
       </h2>
        <nav className="flex gap-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
        </div>
      </header>
    )
}

export default Header;
