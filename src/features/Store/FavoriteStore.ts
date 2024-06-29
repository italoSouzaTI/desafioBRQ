import { favoriteCreate, favoriteGetAll } from "@core/Service/FavoriteService";
import { IPerson } from "@core/Service/People/PeopleTypes";
import { create } from "zustand";

type State = {
  favorites: IPerson[] | [];
};
type Action = {
  getFavorite: () => Promise<void>;
  setFavorite: (person: IPerson) => Promise<void>;
};
export const useFavoriteStore = create<State & Action>((set) => ({
  favorites: [],
  getFavorite: async () => {
    const oldFavorite = await favoriteGetAll();
    set({
      favorites: oldFavorite,
    });
  },
  setFavorite: async (person: IPerson) => {
    await favoriteCreate(person);
  },
}));
