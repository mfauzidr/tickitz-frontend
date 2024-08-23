import userIcon from "../assets/images/user.webp";
import dropdown from "../assets/icons/dropdown.svg";
import search from "../assets/icons/search-icon.svg";

function AdminProfileButton() {
  return (
    <div className="hidden md:flex gap-3 items-center">
      <button type="button" className="flex gap-1 items-center" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <p>Location</p>
        <img width="15" src={dropdown} />
      </button>
      <button type="button">
        <img width="15" src={search} />
      </button>
      <button type="button">
        <img src={userIcon} width="50" className="rounded-full" />
      </button>
    </div>
  );
}

export default AdminProfileButton;
