import userIcon from "../assets/images/user.webp";
import dropdown from "../assets/icons/dropdown.svg";
import search from "../assets/icons/search-icon.svg";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { logout } from "../redux/slices/auth";

function AdminProfileButton() {
  const { user } = useStoreSelector((state) => state.auth);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalBgRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const dropDown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && buttonRef.current && !dropdownRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setShowModal(false);
    navigate("/login");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === modalBgRef.current) {
      setShowModal(false);
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
    <div className="hidden md:flex gap-3 items-center">
      <button type="button" className="flex gap-1 items-center" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <p>Location</p>
        <img width="15" src={dropdown} />
      </button>
      <button type="button">
        <img width="15" src={search} />
      </button>
      <button ref={buttonRef} onClick={dropDown} type="button">
        <img src={user?.image || userIcon} width="50" className="rounded-full" />
      </button>
      <div
        ref={dropdownRef}
        className={`bg-white absolute mt-48 right-12 lg:right-36 pr-10 pl-5 z-50 origin-top-right divide-y divide-gray-100 rounded-md ${
          isDropdownOpen ? "" : "hidden"
        } shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="grid gap-5 py-5" role="none">
          <Link to="/" className=" font-semibold py-1 w-full text-start">
            Home
          </Link>
          <button onClick={handleLogout} className="font-semibold py-1 w-full text-start">
            Logout
          </button>
        </div>
      </div>
      {showModal && (
        <div ref={modalBgRef} onClick={handleBackgroundClick} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
            <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Log Out</h2>
            <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-center">
              <button onClick={handleConfirmLogout} className="text-xs tbt:text-base uw:text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                Log Out
              </button>
              <button onClick={handleCloseModal} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProfileButton;
