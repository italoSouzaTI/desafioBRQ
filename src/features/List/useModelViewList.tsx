import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { PeopleService } from "@core/Service/People/PeopleService";
import { IPerson } from "@core/Service/People/PeopleTypes";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

export function useModelViewList() {
  const { colors, TEXT } = useTheme();
  const { name } = useRoute();
  const isFocused = useIsFocused();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState<IPerson[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);
  const [isNextPage, setIsNextPage] = useState<boolean>(true);

  async function getInitialPeoples() {
    try {
      setIsLoading(true);
      const response = await PeopleService.getPeople(1);
      if (response.status == 200) {
        if (response.next != null) {
          setNextPage((state) => state + 1);
          setIsNextPage(true);
        }
        setList(response.data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  async function fetchNextPage() {
    if (isLoading || !isNextPage) {
      return;
    }
    try {
      setIsRefreshing(true);
      const reposnse = await PeopleService.getPeople(nextPage);
      setList([...list, ...reposnse.data]);
      if (reposnse.next != null) {
        setNextPage((state) => state + 1);
        setIsNextPage(true);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setNextPage((state) => (state = 1));
        setIsNextPage(false);
      }
    } catch (error) {
      Alert.alert("Something unexpected happened, please try again later");
    } finally {
      setIsRefreshing(false);
    }
  }
  useEffect(() => {
    if (isFocused && name === "List") {
      getInitialPeoples();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return { isLoading, colors, TEXT, list, isNextPage, isRefreshing, fetchNextPage, refresh: getInitialPeoples };
}
