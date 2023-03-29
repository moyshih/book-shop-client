import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../api/authApi';
import authService from '../services/authService';
import SignForm from '../components/SignForm/SignForm';

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isUserAuth())
            navigate('/dashboard')
    }, [])

    const registerUser = (email: string, password: string) => {
        authApi.register(email, password)
            .then((_) => {
                navigate(`/login`);
            })
            .catch(_ => { })
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
