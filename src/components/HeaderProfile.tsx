import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HamburgerLogin from "./HamburgerLogin";
import AdminProfileButton from "./AdminProfileButton";

function HeaderProfile() {
  return (
    <header className="flex justify-between items-center font-mulish py-5 px-4 tbt:px-10 lg:px-32 text-sm text-center border-b border-neutral-200">
      <Logo />
      <NavLinks />
      <AdminProfileButton />
      <HamburgerLogin />
    </header>
  );
}

export default HeaderProfile;
