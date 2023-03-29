import axios, { BOOKS_URL } from './axios';
import BookData from '../common/interfaces/BookData';
import authService from '../services/authService';

const getBooks = async () => {
    try {
        const res = await axios.get(`${BOOKS_URL}`,
            {
                headers: authService.header(),
            });
        return res;
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }
}

const createBook = async (bookData: BookData) => {
    try {
        const res = await axios.post(`${BOOKS_URL}`, bookData,
            {
                headers: authService.header(),
            });
        return res;
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }
}

const updateBook = async (bookId: string, bookData: BookData) => {
    try {
        const res = await axios.put(`${BOOKS_URL}/${bookId}`, bookData,
            {
                headers: authService.header(),
            });
        return res;
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }
}

const deleteBook = async (bookId: string) => {
    try {
        const res = await axios.delete(`${BOOKS_URL}/${bookId}`,
            {
                headers: authService.header(),
            });
        return res;
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }
}

export default {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
};