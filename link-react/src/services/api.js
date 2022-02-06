
import axios from 'axios';

export const key = "65fefea1f568f4d7e4ef687c1fdfef8d8986564d";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
