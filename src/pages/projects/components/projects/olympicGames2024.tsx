import { ExternalLink } from "../../../../components/externalLink";
import { TechStack } from "../techStack";

export const OlympicGames2024 = () => {
  return (
    <>
      <h3>Olympic games paris 2024</h3>
      <p>
        This was an individial school project in my second year of college. The
        assignment was to create a webpage for the upcomming paris 2024
        olympics. For this we had to use Java and Spring Boot.
      </p>
      <p>
        I got all the major functions to work but had to skimp out on the
        styling.
      </p>
      <p>
        <strong>Source code</strong>:{" "}
        <ExternalLink href="https://github.com/Sander-Wauters/hogent-2324-AWDJ-SanderWauters">
          https://github.com/Sander-Wauters/hogent-2324-AWDJ-SanderWauters
        </ExternalLink>
      </p>
      <TechStack technologies={["Java", "Spring Boot"]} />
    </>
  );
};
