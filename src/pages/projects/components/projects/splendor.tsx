import { ExternalLink } from "../../../../components/externalLink";
import { TechStack } from "../techStack";

export const Splendor = () => {
  return (
    <>
      <h3>Splendor</h3>
      <p>
        This is the first group project that I worked on in my first year of
        college. Our assignment was to take a boardgame, Splendor, and turn it
        in to a playable desktop application. For this we had to use Java and
        JavaFx.
      </p>
      <p>
        We managed to finish the project and got to play a pretty cool board
        game in return. All in all I think it turned out pretty well for a first
        project in Java.
      </p>
      <p>
        <strong>Source code</strong>:{" "}
        <ExternalLink href="https://github.com/Sander-Wauters/hogent-2223-sdp-splendor-g054">
          https://github.com/Sander-Wauters/hogent-2223-sdp-splendor-g054
        </ExternalLink>
      </p>
      <TechStack technologies={["Java", "JavaFX", "MySQL"]} />
    </>
  );
};
