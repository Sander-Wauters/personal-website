interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <p>
      <strong>Tech stack: </strong>
      {technologies.join(", ")}
    </p>
  );
};
