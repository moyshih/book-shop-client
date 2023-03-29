import axios, { AUTH_URL } from './axios';

const login = async (email: string, password: string) => {
    try {
        const res = await axios.post(`${AUTH_URL}/login`, { email, password });

        if (res.data.token) {
            sessionStorage.setItem('user', res.data.token);
        }

        return res;
    } catch (err) {
        console.error(err);
        return Promise.reject();
    }
};

const register = async (email: string, password: string) => {
    try {
        const res = await axios.post(`${AUTH_URL}/register`, { email, password });
        return res;
    } catch (err) {
        console.error(err);
        return Promise.reject();
    }
};

export default {
    login,
    register,
};
