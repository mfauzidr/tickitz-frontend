import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <div className="hidden md:flex gap-5 my-auto">
      <Link to="/login">
        <button className="px-5 py-2 text-blue-700 rounded-md border border-blue-700 border-solid">Sign In</button>
      </Link>
      <Link to="/register">
        <button className="px-5 py-2 bg-blue-700 rounded-md text-slate-50">Sign Up</button>
      </Link>
    </div>
  );
}

export default AuthButtons;
