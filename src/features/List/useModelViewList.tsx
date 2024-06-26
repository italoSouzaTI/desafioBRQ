import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { PeopleService } from "@core/Service/People/PeopleService";
import { IPeople } from "@core/Service/People/PeopleTypes";
import { useTheme } from "styled-components";

export type ListPeoples = Pick<IPeople, "name" | "url">;
export function useModelViewList() {
  const { colors, TEXT } = useTheme();
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<ListPeoples[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);
  const [isNextPage, setIsNextPage] = useState<boolean>(true);

  async function getInitialPeoples() {
    try {
      setIsLoading(true);
      const response = await PeopleService.getPeoples(1);
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
      const reposnse = await PeopleService.getPeoples(nextPage);
      setList((prev) => [...prev, ...reposnse.data]);
      if (reposnse.next != null) {
        setNextPage((prev) => prev + 1);
        setIsNextPage(true);
      } else {
        setNextPage((prev) => (prev = 1));
        setIsNextPage(false);
      }
    } catch (error) {
      Alert.alert("Something unexpected happened, please try again later");
    } finally {
      setIsRefreshing(false);
    }
  }
  useEffect(() => {
    getInitialPeoples();
  }, []);
  return { isLoading, colors, TEXT, list, isNextPage, isRefreshing, fetchNextPage, refresh: getInitialPeoples };
}
