/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useFavoriteStore } from "@core/Store/FavoriteStore";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

export function useModelViewFavorite() {
  const { TEXT } = useTheme();
  const { favorites } = useFavoriteStore();
  const { name } = useRoute();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();
  async function getdata() {
    try {
      setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (isFocused && name === "Favorite") {
      getdata();
    }
  }, [isFocused]);
  return {
    dataFavorite: favorites,
    isLoading,
    TEXT,
  };
}
