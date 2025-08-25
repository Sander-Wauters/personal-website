import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
import { useMemo } from "react";

const internalLinks = [
  {
    href: routes.home,
    label: "Home",
  },
  {
    href: routes.projects,
    label: "Projects",
  },
  {
    href: routes.gym,
    label: "Gym",
  },
  {
    href: routes.games,
    label: "Games",
  },
] as const;

export const Navigation = () => {
  const { pathname } = useLocation();

  const currentRouteSegment = useMemo(() => {
    const firstSegment = pathname.split("/").filter(Boolean)[0];
    return firstSegment ? `/${firstSegment}` : "/";
  }, [pathname]);

  return (
    <nav className="row">
      <strong>Sitemap</strong>:
      <ul className="inline-list">
        {internalLinks.map(({ href, label }) => (
          <li key={href}>
            {currentRouteSegment === href ? "| " : ""}
            <Link to={href}>{label}</Link>
            {currentRouteSegment === href ? " |" : ""}
          </li>
        ))}
      </ul>
    </nav>
  );
};
