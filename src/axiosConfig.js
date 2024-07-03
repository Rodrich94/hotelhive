// axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tortuga94.pythonanywhere.com',  // Asegúrate de usar el puerto correcto donde tu backend Flask está escuchando
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
