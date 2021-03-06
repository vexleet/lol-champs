export const fetchAllChampions = () => {
  // eslint-disable-next-line no-undef
  return fetch('http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json')
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    });
};

export const fetchChampionByName = (name) => {
  // eslint-disable-next-line no-undef
  return fetch(`http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion/${name}.json`)
    .then((response) => response.json())
    .then((json) => {
      return json.data[name];
    });
};
