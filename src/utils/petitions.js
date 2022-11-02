export const apiConsumption = async (endpoint) => {
  const lastVersion = await getLastVersion();
  const baseURL = `https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/es_MX/`;
  const data = await fetch(`${baseURL}${endpoint}`);

  return data.json();
};

export const getLastVersion = async () => {
  const baseURL = "https://ddragon.leagueoflegends.com/api/versions.json";
  const data = await fetch(baseURL);

  return data.json().then((versions) => versions[0]);
};
