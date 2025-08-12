import axios from 'axios';

const BASE_URL = 'https://full-stack-ems-backend.onrender.com/api/stats';

export const getStats = (token) => {
  return axios.get(`${BASE_URL}/analytics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
