import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        // eslint-disable-next-line no-unused-vars
        changeableUrl = `${url}/countries/${country}`;
    }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async() => {
     try {
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData
     } catch (err) {
         alert("error found")
     }
}

export const fetchCountry = async() => {
    try {
        const {data: { countries}} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch(err) {
        alert("error found")
    }
}