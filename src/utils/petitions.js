const apiConsumption = async (endpoint) => {
    let baseURL = 'https://ddragon.leagueoflegends.com/cdn/11.4.1/data/es_MX/';

    const data = await fetch(`${baseURL}${endpoint}`);
    return data.json();
}

export default apiConsumption;