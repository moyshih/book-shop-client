import User from '../common/interfaces/User';
import { decodeToken, isExpired } from 'react-jwt';

const logout = async () => {
    sessionStorage.removeItem('user');
    return Promise.resolve();
};

const getCurrentUser = () => {
    const token = getToken();

    if (!token)
        return null;

    const decoded: any = decodeToken(token);

    if (!decoded)
        return null;

    const user: User = {
        id: decoded.id,
        email: decoded.email,
        isAdmin: decoded.isAdmin,
        issuedAt: new Date(decoded.iat * 1000),
        expirationTime: new Date(decoded.exp * 1000),
    }

    return user;
};

const isAdmin = () => {
    return getCurrentUser()?.isAdmin ?? false;
}

const isUserAuth = () => {
    const token = getToken();

    return (token && !isExpired(token)) ? true : false;
}

const getToken = () => {
    return sessionStorage.getItem('user');
}

const header = () => {
    const token = getToken();

    if (token)
        return { Authorization: `Bearer ${token}` };
};

export default {
    logout,
    getCurrentUser,
    header,
    isAdmin,
    getToken,
    isUserAuth,
};
