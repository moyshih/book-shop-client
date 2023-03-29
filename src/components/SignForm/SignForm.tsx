import React, { FormEvent, useEffect, useState } from 'react';
import './SignForm.scss';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import authApi from '../../api/authApi';

interface SignFormProps {
    mainText: string,
    buttonText: string,
    linkText: string,
    handleSubmit: (email: string, password: string) => void,
    linkPath: string,
}

const SignForm = ({ mainText, buttonText, linkText, handleSubmit, linkPath}: SignFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShowing, setIsPasswordShowing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isUserAuth())
            navigate('/dashboard')
    }, [])

    return (
        <div className='sign-form-container'>
            <div className="card">
                <div className="text">
                    <h3>{mainText}</h3>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(email, password);
                }}>
                    <div className="input-text">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" />
                        <i className="fa fa-envelope"></i>

                        {/* <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email' /> */}
                    </div>
                    <div className="input-text">
                        <input
                            type={isPasswordShowing ? 'text' : 'password'}
                            // className={` ${warnpassword ? "warning" : ""} ${type ? "type_password" : ""}`}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" />
                        <i className="fa fa-lock"></i>
                        <i onClick={() => setIsPasswordShowing(prev => !prev)} className={`fa ${isPasswordShowing ? "fa-eye-slash" : "fa-eye"}`}></i>

                        {/* <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' /> */}
                    </div>
                    <div className="submit-btn">
                        <button type="submit">{buttonText}</button>
                    </div>
                </form>

                <Link className="link-signup" to={linkPath}>
                    <p>{linkText}</p>
                </Link>
            </div>
        </div>
    );
}

export default SignForm;