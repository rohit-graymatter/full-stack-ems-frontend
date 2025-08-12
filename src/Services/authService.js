import axios from 'axios';

const API = 'https://full-stack-ems-backend.onrender.com/api/auth';

export const registerUser = (data) => axios.post(`${API}/register`, data);
export const loginUser = (data) => axios.post(`${API}/login`, data);
