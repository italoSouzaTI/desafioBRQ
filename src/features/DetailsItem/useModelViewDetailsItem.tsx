import { useEffect, useState } from "react";

import { favoriteCreate, favoriteGetAll } from "@core/Service/FavoriteService";
import { FilmsService } from "@core/Service/Films/FilmsService";
import { IPerson } from "@core/Service/People/PeopleTypes";
import { useMatchNumber } from "@hooks/useMachNumber";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

export function useModelViewDetailsItem() {
  const route = useRoute();
  const { TEXT, colors, PADDING_DEFAULT } = useTheme();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const DATA = route.params.data as IPerson;
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
      const oldFavorite = await favoriteGetAll();
      if (oldFavorite.length) {
        if (isFavorite == false) {
          await favoriteCreate([...oldFavorite, item]);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          setIsFavorite((state) => (state = true));
        } else {
          await removeIsFavorite();
        }
      } else {
        await favoriteCreate([item]);
      }
    } catch (error) {}
  }
  async function removeIsFavorite() {
    try {
      const oldFavorite = await favoriteGetAll();
      const isRemove = oldFavorite.filter((item: IPerson) => item.id != DATA.id);
      await favoriteCreate(isRemove.length ? isRemove : []);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setIsFavorite((state) => (state = false));
    } catch (error) {}
  }
  async function checkIsFavorite() {
    try {
      const oldFavorite = await favoriteGetAll();
      const isCheck = oldFavorite.filter((item: IPerson) => item.id == DATA.id);
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
