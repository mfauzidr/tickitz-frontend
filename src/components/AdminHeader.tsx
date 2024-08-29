import Logo from "./Logo";
import NavLinks from "./AdminNavLinks";
import ProfileButtons from "./AdminProfileButton";
import AdminHamburger from "./AdminHamburger";

function AdminHeader() {
  return (
    <header className="flex flex-wrap gap-5 font-mulish justify-between items-center py-5 px-4 tbt:px-10 lg:px-32 w-full text-sm text-center border-b border-neutral-200">
      <Logo />
      <NavLinks />
      <ProfileButtons />
      <AdminHamburger />
    </header>
  );
}

export default AdminHeader;
