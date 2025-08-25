import { LibrarySection } from "./librarySection";

const fantasy: string[] = [
  "Berserk",
  "Vagabond",
  "Vinland Saga",
  "Tokyo Ghoul",
  "One Piece",
];

const action: string[] = [
  "Sakamoto Days",
  "Great Teacher Onizuka",
  "Dandadan",
  "Chainsaw Man",
];

const martialArts: string[] = [
  "Grappler Baki",
  "Baki",
  "Baki Hanma",
  "Baki-Dou",
  "Bakidou",
  "Baki Rahen",
  "Grappler Baki Gaiden",
  "Baki Gaiden: Scarface",
  "Baki Gaiden: Gaia",
  "Baki Gaiden: Kizuzura",
  "Baki Gaiden: Kenjin",
  "Yuenchi: Baki Gaiden",
  "Kengan Ashura",
  "Kengan Omega",
  "Teppu",
  "Hajime no Ippo",
];

const horror: string[] = [
  "Uzumaki",
  "Tomie",
  "Gyo",
  "Remina",
  "Shiver",
  "Tombs",
] as const;

export const Manga = () => {
  return (
    <>
      <h2>Manga</h2>
      <p>
        While I don't really enjoy reading book, I love to read some good manga.
        I usually look for series that either have an interesting story or good
        artwork.
      </p>
      <LibrarySection title="Fantasy" contents={fantasy} />
      <LibrarySection title="Action" contents={action} />
      <LibrarySection title="Martial arts" contents={martialArts} />
      <LibrarySection title="Horror" contents={horror} />
    </>
  );
};
