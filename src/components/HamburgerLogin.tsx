import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ThreeDots from "../assets/icons/SidebarIcon.svg";
import searchLight from "../assets/icons/SearchLight.svg";

function HamburgerLogin() {
  const links = ["Home", "Movie", "Buy Ticket"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dropDown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && buttonRef.current && !dropdownRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="md:hidden font-mulish">
      <div>
        <button
          ref={buttonRef}
          onClick={dropDown}
          type="button"
          className="dropdown-menu bg-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm"
          id="menu-button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <img src={ThreeDots} alt="" />
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={`bg-white absolute mt-5 right-0 z-50 w-full origin-top-right divide-y divide-gray-100 rounded-md ${isDropdownOpen ? "" : "hidden"} shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="grid gap-5" role="none">
          {links.map((link, index) => (
            <Link key={index} to={`${link.toLowerCase().replace(" ", "-")}`} className="hover:underline text-lg font-semibold py-1 w-full">
              {link}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 py-3 px-4 tbt:px-10 bg-white rounded text-slate-400 w-full">
          <img loading="lazy" src={searchLight} alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <input type="text" className="flex-auto px-4 py-2" placeholder="Search Movie" id="searchMovie" name="searchMovie" />
        </div>
      </div>
    </div>
  );
}

export default HamburgerLogin;
