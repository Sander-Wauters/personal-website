import { Books } from "./components/books";
import { Games } from "./components/games";
import { Manga } from "./components/manga";
import "./library.scss";

export const Library = () => {
  return (
    <>
      <h1>Library</h1>
      <p>
        This is a collection of all the books, manga and games that I have
        read/played.
      </p>
      <Books />
      <Manga />
      <Games />
    </>
  );
};
