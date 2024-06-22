import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${API_BASE_URL}/users`, user);
    return response.data;
};
