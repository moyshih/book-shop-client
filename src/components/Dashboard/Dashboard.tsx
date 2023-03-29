import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import authService from '../../services/authService';
import useBooks from '../../hooks/useBooks';
import { useEffect } from 'react';

const Dashboard = () => {
    const isAdmin = authService.isAdmin();

    return (
        <>
            {isAdmin ?
                <AdminDashboard />
                :
                <UserDashboard />}
        </>
    );
};

export default Dashboard;