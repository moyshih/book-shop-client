import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import SignForm from '../components/SignForm/SignForm';
import authApi from '../api/authApi';
import { AxiosResponse } from 'axios';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isUserAuth())
            navigate('/dashboard')
    }, [])

    const logUserIn = (email: string, password: string): Promise<AxiosResponse<any, any>> => {
        return (
            authApi.login(email, password)
            .then(res => {
                navigate(`/dashboard`);
                return res;
            })
            .catch(err => {
                return Promise.reject(err)
            }))
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
