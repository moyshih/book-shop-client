import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import authService from '../../services/authService';
import useBooks from '../../hooks/useBooks';
import { useEffect } from 'react';

const Dashboard = () => {
    const { fetchBooks } = useBooks();
    const isAdmin = authService.isAdmin();

    useEffect(() => {
        fetchBooks();
        console.log("fetchBooks");
    }, [])

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