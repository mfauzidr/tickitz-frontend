import Logo from "./Logo";
import NavLinks from "./AdminNavLinks";
import ProfileButtons from "./AdminProfileButton";
import AdminHamburger from "./AdminHamburger";

function AdminHeader() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center px-4 lg:px-32 w-full text-sm text-center border-b border-neutral-200 min-h-[104px]">
      <Logo />
      <NavLinks />
      <ProfileButtons />
      <AdminHamburger />
    </header>
  );
}

export default AdminHeader;
