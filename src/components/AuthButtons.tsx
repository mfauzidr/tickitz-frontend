import { Link, useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { useRef, useState } from "react";
import { logout } from "../redux/slices/auth";

function AuthButtons() {
  const { token, user } = useStoreSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const modalBgRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setShowModal(false);
    navigate("/login");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === modalBgRef.current) {
      setShowModal(false);
    }
  };

  return (
    <div className="hidden md:flex gap-5 my-auto font-mulish">
      {token ? (
        <>
          {user?.role === "admin" ? (
            <Link to="/admin">
              <button className="px-5 py-2 text-blue-700 rounded-md border border-blue-700 border-solid">Dashboard</button>
            </Link>
          ) : (
            <Link to="/profile">
              <button className="px-5 py-2 text-blue-700 rounded-md border border-blue-700 border-solid">Profile</button>
            </Link>
          )}
          <button onClick={handleLogout} className="px-5 py-2 bg-blue-700 rounded-md text-slate-50">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="px-5 py-2 text-blue-700 rounded-md border border-blue-700 border-solid">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="px-5 py-2 bg-blue-700 rounded-md text-slate-50">Sign Up</button>
          </Link>
        </>
      )}
      {showModal && (
        <div ref={modalBgRef} onClick={handleBackgroundClick} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-3/4 tbt:w-full text-center">
            <h2 className="text-sm tbt:text-2xl font-semibold mb-4">Confirm Log Out</h2>
            <p className="text-xs xsm:text-sm tbt:text-base mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-center">
              <button onClick={handleConfirmLogout} className="text-xs tbt:text-base bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                Log Out
              </button>
              <button onClick={handleCloseModal} className="text-xs tbt:text-base bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
