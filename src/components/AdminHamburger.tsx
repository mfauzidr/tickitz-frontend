import ThreeDots from "../assets/icons/SidebarIcon.svg";

function AdminHamburger() {
  return (
    <div className="md:hidden">
      <div>
        <button
          type="button"
          className="dropdown-menu bg-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img src={ThreeDots} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AdminHamburger;
