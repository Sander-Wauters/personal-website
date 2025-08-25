import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const schoolProjects = [
  {
    name: "Splendor",
    description: "Boardgame remade in Java.",
  },
  {
    name: "Olympic games paris 2024",
    description: "Webpage for the olympic games using Spring Boot.",
  },
  {
    name: "Blog",
    description: "Blog and REST API in JavaScript.",
  },
  {
    name: "Invoicing software (Delaware)",
    description: "Invoicing software as a web and desktop application.",
  },
  {
    name: "Invoicing software (Dozer)",
    description: "Invoicing software as a web and mobile application.",
  },
] as const;

const hobbyProjects = [
  {
    name: "Graphics engine",
    description: "First major solo project.",
  },
  {
    name: "Personal webpage",
    description: "Kind of speaks for itself.",
  },
] as const;

export const Projects = () => {
  return (
    <>
      <h2>Some of my projects</h2>
      <section>
        <h3 className="list-title">School projects</h3>
        <ul className="styled-list">
          {schoolProjects.map(({ name, description }, i) => (
            <li key={i}>
              <strong>{name}</strong>: {description}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="list-title">Hobby projects</h3>
        <ul className="styled-list">
          {hobbyProjects.map(({ name, description }, i) => (
            <li key={i}>
              <strong>{name}</strong>: {description}
            </li>
          ))}
        </ul>
      </section>
      <p>
        For more details check out the{" "}
        <Link to={routes.projects}>projects</Link> page.
      </p>
    </>
  );
};
