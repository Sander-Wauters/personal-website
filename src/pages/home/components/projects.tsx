import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const schoolProjects = [
  {
    name: "Invoicing software (Dozer)",
    description: "Invoicing software as a web and mobile application.",
  },
  {
    name: "Invoicing software (Delaware)",
    description: "Invoicing software as a web and desktop application.",
  },
  {
    name: "Blog site",
    description: "Webpage and REST API in JavaScript.",
  },
  {
    name: "Olympic games paris 2024",
    description: "Webpage for the olympic games using Spring Boot.",
  },
  {
    name: "Splendor",
    description: "Boardgame remade in Java.",
  },
] as const;

const hobbyProjects = [
  {
    name: "Graphics engine",
    description: "Includes skeletal animation, instancing and lighting.",
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
        <h3 className="list-title">Hobby projects</h3>
        <ul className="styled-list">
          {hobbyProjects.map(({ name, description }, i) => (
            <li key={i}>
              <strong>{name}</strong>: {description}
            </li>
          ))}
        </ul>
      </section>
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
      <p>
        For more details check out the{" "}
        <Link to={routes.projects}>projects</Link> page.
      </p>
    </>
  );
};
