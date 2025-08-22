interface LiftData {
  exercise: string;
  weight: number;
  reps: number;
  equipment: string | null;
  bodyWeight: number;
}

const lifts: LiftData[] = [
  {
    exercise: "Flat barbell bench press",
    weight: 120,
    reps: 1,
    equipment: null,
    bodyWeight: 79,
  },
  {
    exercise: "Highbar squat",
    weight: 130,
    reps: 2,
    equipment: "Belt, knee sleeves",
    bodyWeight: 80,
  },
  {
    exercise: "Romanian deadlift",
    weight: 160,
    reps: 2,
    equipment: null,
    bodyWeight: 78,
  },
  {
    exercise: "Pullups",
    weight: 50,
    reps: 2,
    equipment: "Straps",
    bodyWeight: 78,
  },
  {
    exercise: "Sandbag to shoulder",
    weight: 75,
    reps: 2,
    equipment: null,
    bodyWeight: 80,
  },
  {
    exercise: "Clean & press",
    weight: 60,
    reps: 2,
    equipment: null,
    bodyWeight: 81,
  },
  {
    exercise: "Concentration curl",
    weight: 27,
    reps: 5,
    equipment: "Wrist wraps",
    bodyWeight: 80,
  },
  {
    exercise: "Zercher squat",
    weight: 80,
    reps: 2,
    equipment: null,
    bodyWeight: 78,
  },
  {
    exercise: "Incline dumbbell bench press",
    weight: 40,
    reps: 5,
    equipment: "Wrist wraps",
    bodyWeight: 78,
  },
  {
    exercise: "Standing calf raises",
    weight: 200,
    reps: 8,
    equipment: null,
    bodyWeight: 78,
  },
] as const;

export const Gym = () => {
  return (
    <>
      <h2>Best lifts and gym bragging rights</h2>
      <p>
        I have been training for ~{new Date().getFullYear() - 2017} years now
        and it's one of my favorite hobbies. Usually I just work out for fun but
        now and then I like going for some numbers. Here are some of by best
        lifts that I have done.
      </p>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Weigth</th>
            <th>Reps</th>
            <th>Equipment</th>
            <th>Body weight</th>
          </tr>
        </thead>
        <tbody>
          {lifts.map(({ exercise, weight, reps, equipment, bodyWeight }) => (
            <tr>
              <td>{exercise}</td>
              <td>{weight}kg</td>
              <td>{reps}</td>
              <td>{equipment ?? "-"}</td>
              <td>{bodyWeight}kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
