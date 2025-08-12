import axios from 'axios';

const BASE_URL = 'https://full-stack-ems-backend.onrender.com/api/notifications';

export const getLatestNotification = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest`);
    return response.data; // returns { add, update, delete } or null
  } catch (error) {
    // If 404, return null gracefully
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error; // re-throw other errors
  }
};
