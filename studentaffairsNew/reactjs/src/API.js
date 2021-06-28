/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';
// import errorLog from 'debug';

const API = axios.create({
  // For localhosting on Port 4000 for database
  baseURL: process.env.API_URL || 'http://localhost:4000',
});

{
  // API.interceptors.response.use(
//   (response) => (response ? response.data : {}),
//   (error) => {
//     errorLog(error);
//     return error;
//   },
// );
}

export default API;
