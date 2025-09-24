import link from 'next/link';
import home from "@/pages/home";
import about from "@/pages/about"

const Header: React.FC = () => {
    return(
      <header className="bg-blue-400 text-white px-2 py-4">
        <div className="flex justify-between px-4 items-center">
       <h2 className="font-bold text-2x1">
      Bissy Classic
       </h2>
       <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
       </nav>
        </div>
      </header>
    )
}

export default Header;
