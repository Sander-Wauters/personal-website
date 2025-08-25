import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const lifts = [
  {
    exercise: "Sandbag to shoulder",
    weight: 75,
  },
  {
    exercise: "Highbar squat",
    weight: 130,
  },
  {
    exercise: "Flat barbell bench press",
    weight: 120,
  },
  {
    exercise: "Weigthed pullups",
    weight: 50,
  },
];

export const Gym = () => {
  return (
    <>
      <h2>Latest lifts</h2>
      <section>
        <ul className="styled-list">
          {lifts.map(({ exercise, weight }, i) => (
            <li key={i}>
              <strong>{exercise}</strong>: {weight}kg
            </li>
          ))}
        </ul>
      </section>
      <p>
        For more details check out the <Link to={routes.gym}>gym</Link> page.
      </p>
    </>
  );
};
