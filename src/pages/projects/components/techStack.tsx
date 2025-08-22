interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <>
      <p>
        <strong>Tech stack: </strong>
      </p>
      <ul>
        {technologies.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  );
};
