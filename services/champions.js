export const fetchAllChampions = () => {
  // eslint-disable-next-line no-undef
  return fetch('http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data);
      return json.data;
    });
};
