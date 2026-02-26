import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeRedirect from "../components/HomeRedirect";
import LoginPage from "../login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../dashboardLayout/DashboardLayout";
import DashboardOverview from "../dashboard/DashboardOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>page not found</h2>,
    children: [
      { index: true, element: <HomeRedirect /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: "/dashboard/tasks", element: <h2>Welcome to task</h2> },
    ],
  },
]);

export default router;
