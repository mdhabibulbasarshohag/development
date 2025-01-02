import axios from "axios";

export const getCountries = async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    const countries = res.data; // Access the data directly
    return countries;
};

