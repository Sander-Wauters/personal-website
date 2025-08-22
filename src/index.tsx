import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout";
import "./index.scss";
import { Projects } from "./pages/projects";
import { Gym } from "./pages/gym";
import { InterestingStuff } from "./pages/interestingStuff";
import { Games } from "./pages/games";
import { routes } from "./routes";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.projects,
        element: <Projects />,
      },
      {
        path: routes.gym,
        element: <Gym />,
      },
      {
        path: routes.interestingStuff,
        element: <InterestingStuff />,
      },
      {
        path: routes.games,
        element: <Games />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routes.home} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
