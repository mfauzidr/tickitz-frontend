
import { Link } from 'react-router-dom';
import ThreeDots from "../assets/icons/SidebarIcon.svg"
import { MouseEventHandler, useState } from 'react';
import searchLight from "../assets/icons/SearchLight.svg"

function Dropdown() {
  const links = ['Home', 'Movie', 'Buy Ticket'];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
    const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
    const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
    setIsDropdownOpen((prevState) => !prevState)
    isDropdownOpen ? dropdownMenu1?.classList.remove('hidden') : dropdownMenu1?.classList.add('hidden');
    isDropdownOpen ? dropdownMenu?.classList.remove('hidden') : dropdownMenu?.classList.add('hidden');
  }
  return (
      <div className='md:hidden'>
        <div>
          <button
            onClick={dropDown}
            type="button"
            className="dropdown-menu bg-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
            id="menu-button" aria-expanded="true" aria-haspopup="true">
            <img src={ThreeDots} alt="" />
          </button>
        </div>
        <div className="bg-white absolute right-0 z-10 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
          role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1 flex flex-col" role="none">
            {links.map((link, index) => (
              <Link key={index} to={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:underline text-lg font-semibold py-1 border w-full border-solid">
                {link}
              </Link>
            ))}
          </div>
          <div className="py-1 " role="none" >
            <div className="flex flex-auto gap-4 p-3 text-base tracking-wider bg-white rounded text-slate-400 w-full">
              <img
                loading="lazy"
                src={searchLight}
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <input type="text" className="flex-auto px-4 py-2" placeholder="New Born Expert"/>
            </div>
          </div>
          <div className="flex gap-3 items-center p-4 justify-center self-stretch my-auto tracking-wider leading-6">
            <button className="gap-1.5 self-stretch px-5 py-3 text-blue-700 hover:bg-blue-700 whitespace-nowrap rounded-md border border-blue-700 hover:text-slate-50 border-solid">
              SignIn
            </button>
            <button className="gap-1.5 self-stretch px-5 py-3 text-blue-700 hover:bg-blue-700 rounded-md whitespace-nowrap border-blue-700 hover:text-slate-50 border-solid border">
              Sign Up
            </button>
          </div>
        </div>
      </div>
  );
}

export default Dropdown;