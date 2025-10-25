import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

export default function AppLayout() {
  return (
    <div className="flex items-center bg-gray-50">
      <Navigation />
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
}
