import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (data: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/user/register`, data);
    return response.data;
};
