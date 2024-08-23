function NavLinks() {
  const links = ["Home", "Movie", "Buy Ticket"];

  return (
    <nav className="flex gap-10 items-start self-stretch my-auto leading-none min-w-[240px] text-slate-900">
      {links.map((link, index) => (
        <a key={index} href={`${link.toLowerCase().replace(" ", "-")}`} className="hover:underline">
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
