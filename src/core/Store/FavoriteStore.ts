import { favoriteCreate, favoriteGetAll } from "@core/Service/FavoriteService";
import { IPerson } from "@core/Service/People/PeopleTypes";
import { create } from "zustand";

type State = {
  favorites: IPerson[] | [];
};
type Action = {
  loadFavorite: () => Promise<void>;
  setFavorite: (person: IPerson) => Promise<void>;
  setRemove: (person: string) => Promise<void>;
};
export const useFavoriteStore = create<State & Action>((set) => ({
  favorites: [],
  loadFavorite: async () => {
    const oldFavorite = await favoriteGetAll();
    set({
      favorites: oldFavorite,
    });
  },
  setFavorite: async (person: IPerson) => {
    await favoriteCreate([...useFavoriteStore.getState().favorites, person]);
    set({
      favorites: [...useFavoriteStore.getState().favorites, person],
    });
  },
  setRemove: async (id: string) => {
    const isRemove = useFavoriteStore.getState().favorites.filter((item: IPerson) => item.id != id);
    await favoriteCreate(isRemove.length ? isRemove : []);
    set({
      favorites: isRemove.length ? isRemove : [],
    });
  },
}));
