import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddServices from "@/pages/admin/AddServices";
import Dashboard from "@/pages/admin/Dashboard";
import ServicesList from "@/pages/admin/ServicesList";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-services",
        element: <AddServices></AddServices>,
      },
      { path: "service-list", element: <ServicesList></ServicesList> },
    ],
  },
]);

export default router;
