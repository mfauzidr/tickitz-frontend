import { Link } from "react-router-dom";

function AdminNavLinks() {
  return (
    <nav className="hidden md:flex gap-10 items-start self-stretch my-auto leading-none min-w-[240px] text-slate-900">
      <Link to="/admin" className="hover:underline">
        Dashboard
      </Link>
      <Link to="/admin/movie" className="hover:underline">
        Movie
      </Link>
    </nav>
  );
}

export default AdminNavLinks;
