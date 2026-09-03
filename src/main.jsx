import "./index.css";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./routes/homepage/HomePage.jsx";
import DashbaordPage from "./routes/dashboardPage/DashbaordPage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import Rootlayout from "./layout/Rootlayout/RootLayout.jsx";
import DashboardLayout from "./layout/dashboardLayout/DashboardLayout.jsx";
import SigninPage from "./routes/SigninPage/SigninPage.jsx";
import SignupPage from "./routes/SignupPage/SignupPage.jsx";
const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SigninPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignupPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashbaordPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
