function AdminNavLinks() {
  const links = ["Dashboard", "Movie"];

  return (
    <nav className="hidden md:flex gap-10 items-start self-stretch my-auto leading-none min-w-[240px] text-slate-900">
      {links.map((link, index) => (
        <a key={index} href={`${link.toLowerCase().replace(" ", "-")}`} className="hover:underline">
          {link}
        </a>
      ))}
    </nav>
  );
}

export default AdminNavLinks;
