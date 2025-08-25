import { Gym } from "./components/gym";
import { Projects } from "./components/projects";

export const Home = () => {
  return (
    <>
      <h1>Sander Wauterses' webpage</h1>
      <p>Hello! I am Sander and this is my webpage.</p>
      <div className="row">
        <section>
          <Projects />
        </section>
        <section>
          <Gym />
        </section>
      </div>
    </>
  );
};
