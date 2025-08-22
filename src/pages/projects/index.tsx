import { GraphicsEngine } from "./components/projects/graphicsEngine";
import { GraphicsEngineBlog } from "./components/projects/graphicsEngineBlog";
import { InvoicingSoftwareDelaware } from "./components/projects/invoicingSoftwareDelaware";
import { InvoicingSoftwareDozer } from "./components/projects/invoicingSoftwareDozer";
import { OlympicGames2024 } from "./components/projects/olympicGames2024";
import { Splendor } from "./components/projects/splendor";

export const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <p>
        This is a list of some of the projects that I have worked on over the
        years.
      </p>
      <section>
        <h2>Software projects</h2>
        <section>
          <InvoicingSoftwareDozer />
        </section>
        <section>
          <GraphicsEngine />
        </section>
        <section>
          <InvoicingSoftwareDelaware />
        </section>
        <section>
          <GraphicsEngineBlog />
        </section>
        <section>
          <OlympicGames2024 />
        </section>
        <section>
          <Splendor />
        </section>
      </section>
    </>
  );
};
