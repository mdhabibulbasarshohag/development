import axios from "axios";

const getRandomUser = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0];
};

export default getRandomUser;