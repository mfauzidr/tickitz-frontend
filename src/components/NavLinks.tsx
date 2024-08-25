function NavLinks() {
  const links = ["Home", "Movie", "Buy Ticket"];

  return (
    <nav className="hidden md:flex justify-around gap-10 items-start self-stretch my-auto text-m leading-none text-slate-900">
      {links.map((link, index) => (
        <a key={index} href={`${link.toLowerCase().replace(" ", "-")}`} className="hover:underline">
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
