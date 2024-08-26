import { Link } from "react-router-dom";

function NavLinks() {

  return (
    <nav className="hidden md:flex justify-around gap-10 items-start self-stretch my-auto text-m leading-none text-slate-900">
      <Link to="/home" className="hover:underline">
        Home
      </Link>
      <Link to="/order" className="hover:underline">
        order
      </Link>
    </nav>
  );
}

export default NavLinks;
