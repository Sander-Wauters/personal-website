import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { About } from "./pages/about";
import { Layout } from "./components/layout";
import "./index.scss";
import { Projects } from "./pages/projects";
import { Gym } from "./pages/gym";
import { InterestingStuff } from "./pages/interestingStuff";
import { Games } from "./pages/games";

export const routes = {
  about: "/",
  projects: "/projects",
  gym: "/gym",
  interestingStuff: "/interestingStuff",
  games: "/games",
};

const router = createBrowserRouter([
  {
    path: routes.about,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <About />,
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
    element: <Navigate to={routes.about} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
