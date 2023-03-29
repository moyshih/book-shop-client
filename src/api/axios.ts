import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const AUTH_URL = 'auth';
const BOOKS_URL = 'books';
const PURCHASE_URL = 'purchases';

export default axios.create({
    baseURL: BASE_URL
});

export {
    AUTH_URL,
    BOOKS_URL,
    PURCHASE_URL,
}