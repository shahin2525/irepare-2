import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-green-500 h-screen sticky top-0 left-0 overflow-auto bg-light-gray">
      <nav className="flex flex-col p-4 gap-2">
        <NavLink
          className={({ isActive }) =>
            cn(
              "rounded-sm bg-gray hover:bg-dark-gray hover:text-white p-2 flex items-center gap-2",
              {
                "text-white bg-dark-gray": isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "rounded-sm bg-gray hover:bg-dark-gray hover:text-white p-2 flex items-center gap-2",
              {
                "text-white bg-dark-gray": isActive,
              }
            )
          }
          to="/admin/add-services"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Services</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "rounded-sm bg-gray hover:bg-dark-gray hover:text-white p-2 flex items-center gap-2",
              {
                "text-white bg-dark-gray": isActive,
              }
            )
          }
          to="/admin/service-list"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
