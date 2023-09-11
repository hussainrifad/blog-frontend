import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useToken from './hooks/useToken';

const SignUp = () => {

    const { auth, user, registerUser, } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();
    if(token) navigate('/');

    const saveUser = () => {
        
        const user = {
            email : userInfo.email,
            name : userInfo.username.toLowerCase()
        }  

        fetch('https://dailyblogs-backend-server.onrender.com/users',{
            method : 'POST',
            headers : { 'content-type' : 'application/json'},
            body : JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            //
        })

        setUserEmail(userInfo.email);
    }

    const handleBlur = (e) => {
        const form = e.target;
        const value = form.value;
        const field = form.name;

        const newUserInfo = {...userInfo };
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        registerUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: userInfo.username.toLowerCase()
                }).then(() => {
                    //
                }).catch(error => {
                    // 
                })
                // calling saveUser function to save all user after sign up 
                saveUser();
                console.log('saveUser function running well');
            }).catch(error => {
                console.log(error);
                setSignUpError(error)
            })

        console.log(user);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input onBlur={handleBlur} name='username' type="text" placeholder="user name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleBlur} name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleBlur} name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;