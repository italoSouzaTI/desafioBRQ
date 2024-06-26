import { IPeople } from "./PeopleTypes";

function toPeoples(peoples: IPeople) {
  const newData = [];
  if (peoples.length <= 0) {
    return [];
  }
  peoples.map((people) => {
    const characterId = people.url.match(/\/(\d+)\/$/);
    newData.push({
      id: characterId[1],
      name: people.name,
      url: people.url,
    });
  });
  return newData;
}
export const PeopleAdapter = { toPeoples };
