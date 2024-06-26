import { PageAPI } from "../People/PeopleTypes";
import { Service } from "../Service";

import { FilmsAdapter } from "./FilmsAdapter";
import { IFilms } from "./FilmsTypes";

async function getFilms(id: string): Promise<PageAPI<IFilms>> {
  const { api } = Service();
  const response = await api.get(`films/${id}`);
  return {
    status: response.status,
    data: FilmsAdapter.toFilms(response.data),
  };
}

export const FilmsService = {
  getFilms,
};
