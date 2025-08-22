import { ExternalLink } from "../../../../components/externalLink";
import { TechStack } from "../techStack";

export const GraphicsEngine = () => {
  return (
    <>
      <h3>Graphics engine</h3>
      <p>
        For my first large hobby project I made a graphics engine, a classic.
        Why? Simple, it just sound cool to work on. I got a lot of things kinda
        working, skeleten animation, basic lighting, a nice UI to play around
        with. Mind you it's very janky, but still for having had little to no
        experiance in programming at the time, it a decent project.
      </p>
      <p>
        The project was never finished because, well let's be honest, the scope
        was just way to big for a new programmer. It was not a waste of time
        though, it still remains one of the best learning experiances that I had
        for programming.
      </p>
      <p>
        <strong>Source code</strong>:{" "}
        <ExternalLink href={"https://github.com/Sander-Wauters/RoX"}>
          https://github.com/Sander-Wauters/RoX
        </ExternalLink>
      </p>
      <TechStack technologies={["C++", "DirectX12", "DirectXTK12"]} />
    </>
  );
};
