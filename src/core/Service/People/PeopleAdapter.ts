import { useMatchNumber } from "@hooks/useMachNumber";

import { IPerson } from "./PeopleTypes";

function toPeople(peoples: IPerson) {
  const newData = [];
  if (peoples.length <= 0) {
    return [];
  }
  peoples.map((people) => {
    const characterId = useMatchNumber(people.url);
    people.id = characterId[1];
    newData.push({
      id: characterId[1],
      people,
    });
  });
  return newData;
}
export const PeopleAdapter = { toPeople };
