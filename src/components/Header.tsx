import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-32 w-full text-sm text-center border-b border-neutral-200 min-h-[104px] max-md:px-5 max-md:max-w-full">
      <Logo />
      <NavLinks />
      <AuthButtons />
    </header>
  );
}

export default Header;