import { Link } from "react-router-dom";
import { routes } from "../routes";

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
  {
    href: routes.interestingStuff,
    label: "Interesting stuff",
  },
] as const;

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {internalLinks.map(({ href, label }, i) => (
          <li key={i}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
