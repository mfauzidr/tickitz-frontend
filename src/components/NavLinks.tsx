import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="hidden md:flex justify-around gap-10 items-start font-mulish self-stretch my-auto text-m leading-none text-slate-900">
      <Link to="/" className="hover:underline">
        Home
      </Link>
    </nav>
  );
}

export default NavLinks;
