import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import SignForm from '../components/SignForm/SignForm';
import authApi from '../api/authApi';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isUserAuth())
            navigate('/dashboard')
    }, [])

    const logUserIn = (email: string, password: string) => {
        authApi.login(email, password)
            .then(_ => navigate(`/dashboard`))
            .catch(_ => { });
    };

    return (
        <SignForm
        mainText={'Welcome Back'}
        buttonText={'Log in'}
        linkText={'Not a member? SignUp here!'}
        handleSubmit={logUserIn}
        linkPath='/register' />
    )
};

export default Login;
