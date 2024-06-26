import { IFilms } from "./FilmsTypes";

function toFilms(films: IFilms) {
  return films.title;
}
export const FilmsAdapter = { toFilms };
