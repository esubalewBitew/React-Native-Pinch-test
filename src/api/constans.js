import axios from 'axios';

const baseURL = 'https://65b683deda3a3c16ab00d19d.mockapi.io';
const baseURL_TEST = 'https://jsonplaceholder.typicode.com/todos';

export const USERS_URI = axios.create({
    baseURL: `${baseURL}/users`,
});

export const TEST_URI = axios.create({
    baseURL: `${baseURL_TEST}/users`,
});


