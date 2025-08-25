import { ExternalLink } from "../../../../components/externalLink";
import { TechStack } from "../techStack";

export const GraphicsEngineBlog = () => {
  return (
    <>
      <h3>Blog for my graphics engine</h3>
      <p>
        This was an individial school project in my second year of college. The
        assignment was to create a webpage and a REST API for a topic of our
        choosing. For this we had to use JavaScript, React and Node.
      </p>
      <p>
        I chose to make a small blog for a graphics engine that I was working on
        at the time. Users could register an account and log in to leave
        comments on the different blog posts. It turned out pretty well in my
        opinion. I got a lot of features in and am pretty fond of the styling.
      </p>
      <p className="list-title">
        <strong>Source code</strong>:{" "}
      </p>
      <ul className="styled-list">
        <li>
          Front-end:{" "}
          <ExternalLink href="https://github.com/Sander-Wauters/hogent-2324-frontendweb-SanderWauters">
            github.com/Sander-Wauters/hogent-2324-frontendweb-SanderWauters
          </ExternalLink>
        </li>
        <li>
          Back-end:{" "}
          <ExternalLink href="https://github.com/Sander-Wauters/hogent-2324-webservices-SanderWauters">
            github.com/Sander-Wauters/hogent-2324-webservices-SanderWauters
          </ExternalLink>
        </li>
      </ul>
      <TechStack
        technologies={["JavaScript", "React", "Node", "Sequelize", "MySQL"]}
      />
    </>
  );
};
