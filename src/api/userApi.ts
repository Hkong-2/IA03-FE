import axios from 'axios';

const API_URL = 'http://localhost:5000'; // backend NestJS URL

export const registerUser = async (data: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/user/register`, data);
    return response.data;
};
