import authService from '../services/authService';
import axios, { PURCHASE_URL } from './axios';

const getPurchases = async () => {
    try {
        const res = await axios.get(
            `${PURCHASE_URL}/${authService.getCurrentUser()?.id}`,
            {
                headers: authService.header(),
            });
        return res;
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }
}

const purchaseBook = async (bookId: string) => {
    try {
        const res = await axios.post(
            `${PURCHASE_URL}`,
            {
                bookId,
                userId: authService.getCurrentUser()?.id
            },
            {
                headers: authService.header(),
            },
        );
        return res;
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }
}

export default {
    getPurchases,
    purchaseBook
};