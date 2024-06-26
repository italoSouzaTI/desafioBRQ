import { useEffect, useState } from "react";

import { favoriteGetAll } from "@core/Service/FavoriteService";
import { IPerson } from "@core/Service/People/PeopleTypes";
import { useIsFocused } from "@react-navigation/native";
import { useTheme } from "styled-components";

export function useModelViewFavorite() {
  const { colors, TEXT } = useTheme();
  const [dataFavorite, setDataFavorite] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();
  async function getFavorite() {
    try {
      setIsLoading(true);
      const response = await favoriteGetAll();
      setDataFavorite(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getFavorite();
  }, [isFocused]);
  return {
    dataFavorite,
    isLoading,
    colors,
    TEXT,
  };
}
