interface LibrarySectionProps {
  title: string;
  contents: string[];
}

export const LibrarySection = ({ title, contents }: LibrarySectionProps) => {
  return (
    <section>
      <h3>{title}</h3>
      <ul className="library-list">
        {contents
          .sort((a, b) => a.localeCompare(b))
          .map((name) => (
            <li>{name}</li>
          ))}
      </ul>
    </section>
  );
};
