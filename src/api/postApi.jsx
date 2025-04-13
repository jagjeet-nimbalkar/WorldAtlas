import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountry = () => {
  return api.get("/all?fields=name,population,region,capital,flags"); 
};


export const getCountryInd = (name) => {
  return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregions,capital,tld,currencies,languages,borders,flags`); 
};
