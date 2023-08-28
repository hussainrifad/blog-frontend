import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    const { user, setUser, setError, googleSignIn, githubSignIn, signInwithEmailPassword, } = useContext(AuthContext)
    const [signInInfo, setSignInInfo] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        signInwithEmailPassword(signInInfo.email, signInInfo.password)
        .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
        })
        .then(error => {
            setError(error);
            console.log(error);
        })

    }

    const handleBlur = (e) => {
        const form = e.target;
        const value = form.value;
        const field = form.name;

        const newSignInInfo = {...signInInfo};
        newSignInInfo[field] = value;
        setSignInInfo(newSignInInfo);
    }

    const handleGithub = () => {
        githubSignIn()
        .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
        })
        .then(error => {
            setError(error);
        })
    }

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
        })
        .then(error => {
            setError(error);
        })

    }
    console.log(signInInfo);
    return (
        <div className="hero min-h-[500px] bg-base-200">
            <div className="my-10 hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <p className="py-6">Sign in and post your blogs now. Express you feelings with others and get know each other.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleBlur} type='email' placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleBlur} type="text" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <span className='h-1 bg-cyan-700'><hr /></span>
                    <div className="card-body mt-[-40px]">
                        <div className="form-control mt-6">
                            <button onClick={handleGithub} className="h-12 rounded-lg btn-primary flex text-white items-center"> <span className='text-2xl w-1/6 ml-5'><BsGithub /></span><span className='w-5/6'>SignIn with Github</span></button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGoogle} className="h-12 rounded-lg hover:bg-gray-200 font-semibold border-2 border-black flex text-orange-700 items-center"> <span className='text-2xl w-1/6 ml-5'><FcGoogle /></span><span className='w-5/6'>SignIn with Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;