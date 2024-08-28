import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ThreeDots from "../assets/icons/SidebarIcon.svg";
import { useStoreDispatch } from "../redux/hooks";
import { logout } from "../redux/slices/auth";

function AdminHamburger() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalBgRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

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
        <div className="grid gap-5 py-5" role="none">
          <Link onClick={() => setIsDropdownOpen(false)} to="/admin/dashboard" className="text-lg font-semibold py-1 w-full">
            Dashboard
          </Link>
          <Link onClick={() => setIsDropdownOpen(false)} to="/admin/movie" className="text-lg font-semibold py-1 w-full">
            Movie
          </Link>
          <button onClick={handleLogout} className="text-lg font-semibold py-1 w-full">
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
              <button onClick={handleConfirmLogout} className="text-xs tbt:text-base uw:text-2xl bg-red-500 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                Log Out
              </button>
              <button onClick={handleCloseModal} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 active:bg-gray-700 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminHamburger;
