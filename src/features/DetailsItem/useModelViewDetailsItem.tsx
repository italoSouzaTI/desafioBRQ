import { useEffect, useState } from "react";

import { FilmsService } from "@core/Service/Films/FilmsService";
import { IPerson } from "@core/Service/People/PeopleTypes";
import { useFavoriteStore } from "@core/Store/FavoriteStore";
import { useMatchNumber } from "@hooks/useMachNumber";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

export function useModelViewDetailsItem() {
  const route = useRoute();
  const { TEXT, colors, PADDING_DEFAULT } = useTheme();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const DATA = route.params.data as IPerson;
  const [favorites, setFavorite, setRemove] = useFavoriteStore((state) => [
    state.favorites,
    state.setFavorite,
    state.setRemove,
  ]);
  const [dataPerson, setDataPerson] = useState<IPerson>();
  async function getFilms() {
    try {
      setIsLoading(true);
      let auxListIDFilms = [],
        auxListFilms = [],
        newData = DATA;
      if (DATA.films.length && !DATA.films[0].hasOwnProperty("title")) {
        DATA.films.map((element) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          let temporary = useMatchNumber(element);
          auxListIDFilms.push({ id: temporary[1] });
        });
        for (let index = 0; index < auxListIDFilms.length; index++) {
          const response = await FilmsService.getFilms(auxListIDFilms[index].id);
          if (response.status == 200) {
            auxListFilms.push({ title: response.data });
          }
        }
        newData.films = auxListFilms;
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setDataPerson((state) => (state = newData));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  async function handleFavorite(item: IPerson) {
    try {
      setIsFavorite((state) => !state);
      const isExist = favorites.filter((item: IPerson) => item.id == DATA.id);
      if (isExist.length) {
        setRemove(DATA.id);
      } else {
        setFavorite(item);
      }
    } catch (error) {}
  }
  async function checkIsFavorite() {
    try {
      const isCheck = favorites.filter((item) => item.id == DATA.id);
      if (isCheck.length) {
        setIsFavorite(true);
      }
    } catch (error) {}
  }
  useEffect(() => {
    getFilms();
    checkIsFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return {
    isLoading,
    TEXT,
    colors,
    dataPerson,
    PADDING_DEFAULT,
    isFavorite,
    handleFavorite,
  };
}
