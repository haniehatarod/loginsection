import { NavLink } from "react-router-dom";
import {
  HiArrowLeftStartOnRectangle,
  HiArrowRightStartOnRectangle,
  HiNewspaper,
} from "react-icons/hi2";
import { useAuth } from "../../context/AuthContext";
export default function Navigation() {
  const { user, logout } = useAuth();
  return (
    <nav className="shadow-md bg-white min-h-screen w-16 p-5 flex  flex-col justify-between ">
      <ul className="flex flex-col gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#6C63FF] font-bold" : "text-gray-500"
            }
          >
            <HiNewspaper size={32} />
          </NavLink>
        </li>
        {!user && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-[#6C63FF] font-bold" : "text-gray-500"
              }
            >
              <HiArrowLeftStartOnRectangle size={32} />
            </NavLink>
          </li>
        )}
      </ul>
      {user && (
        <button onClick={logout} className="text-gray-500 text-sm">
          <HiArrowRightStartOnRectangle size={32} />
          خروج
        </button>
      )}
    </nav>
  );
}
