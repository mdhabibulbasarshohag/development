import axios from "axios";

export const getUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = res.data; // Access the data directly
    return users;
};
