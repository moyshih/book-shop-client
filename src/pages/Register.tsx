import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../api/authApi';
import authService from '../services/authService';
import SignForm from '../components/SignForm/SignForm';
import { AxiosResponse } from 'axios';

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isUserAuth())
            navigate('/dashboard')
    }, [])

    const registerUser = async (email: string, password: string): Promise<AxiosResponse<any, any>> => {
        return (
            authApi.register(email, password)
                .then(res => {
                    navigate(`/login`);
                    return res;
                })
                .catch(err => {
                    return Promise.reject(err)
                }))
    };

    return (
        <SignForm
            mainText={'Welcome'}
            buttonText={'Register'}
            linkText={'Already a member? LogIn here!'}
            handleSubmit={registerUser}
            linkPath='/login' />
    )
};

export default Register;
