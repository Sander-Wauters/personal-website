import { LibrarySection } from "./librarySection";

const computerScience: string[] = [
  "Design Patterns",
  "Hacker's Delight",
  "Introduction to 3D Game Programming with DirectX 12",
  "Het Compete Boek: Windows Server 2019",
] as const;

const philosophy: string[] = [
  "Think And Grow Rich",
  "Either/Or",
  "Thus Spoke Zarathustra",
  "The Problem Of The Puer Aeternus",
  "The Book of Five Rings",
  "Dokkōdō",
] as const;

const design: string[] = [
  "Grid systems in graphic design: A visual communication manual for graphic designers, typographers and three dimensional designers",
] as const;

export const Books = () => {
  return (
    <>
      <h2>Books</h2>
      <p>
        I'm not really that much of a reader but I do like to pick up a book now
        and then. Usually I go for book that try to teach some thing or another,
        whether it be philosophy, computer sience, design, etc. Keep in mind
        that I do not necessarily agree with the contents of all of these.
      </p>
      <LibrarySection title="Computer science" contents={computerScience} />
      <LibrarySection title="Philosophy" contents={philosophy} />
      <LibrarySection title="Design" contents={design} />
    </>
  );
};
