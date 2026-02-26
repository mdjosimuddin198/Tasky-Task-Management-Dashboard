import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeRedirect from "../components/login/HomeRedirect";
import LoginPage from "../components/login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeRedirect /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <h2>welcome dashboard</h2>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
