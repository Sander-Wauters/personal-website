import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Index } from "./pages/index";
import { Layout } from "./components/layout";

export const routes = {
  index: "/",
};

const router = createBrowserRouter([
  {
    path: routes.index,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routes.index} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
