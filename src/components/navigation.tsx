import { Link } from "react-router-dom";
import { routes } from "../routes";

const internalLinks = [
  {
    href: routes.about,
    label: "About",
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
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {internalLinks.map(({ href, label }) => (
          <li>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
