import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center px-4 sm:px-8 lg:px-32 w-full text-sm text-center border-b border-neutral-200 min-h-[104px]">
      <Logo />
      <NavLinks />
      <AuthButtons />
    </header>
  );
}

export default Header;