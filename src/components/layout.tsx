import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";
import { ThemeSelect } from "./themeSelect";

export const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <Navigation />
        <ThemeSelect />
      </footer>
    </>
  );
};
