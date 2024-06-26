import { Service } from "../Service";

import { PeopleAdapter } from "./PeopleAdapter";
import { IPagination, PageAPI } from "./PeopleTypes";

async function getPeople(page: number): Promise<PageAPI<IPagination>> {
  const { api } = Service();
  const response = await api.get(`people/?page=${page}`);
  return {
    status: response.status,
    data: PeopleAdapter.toPeople(response.data.results),
    next: response.data.next,
    previous: response.data.previous,
  };
}

export const PeopleService = {
  getPeople,
};
