import React, { createContext, useEffect, useState } from 'react';
import { app } from '../fireBase/firebase.config';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUSer] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // GOOGLE SIGN_IN
    const googleProvider = new GoogleAuthProvider;
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // GITHUB SIGN_IN       
    const githubProvider = new GithubAuthProvider;
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // LOGIN WITH EMAIL AND PASSWORD 
    const signInwithEmailPassword = (email, password) => {
        return signInwithEmailPassword(auth, email, password);
    }

    // REGISTER WITH EMAIL AND PASSWORD
    const registerUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd);
    }

    // SET THE USER NAME 
    const setUserName = (userName) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            // photoURL:
        })
    }

    // LOGOUT 
    const logOut = () => {
        return signOut(auth);
    }

    // LOAD CURRENT USER 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUSer(currentUser);
            setLoading(false);
            console.log(user);
        });

        return () => unsubscribe();
    }, [])


    return (
        <AuthContext.Provider value={{
            user, setUSer, setError, googleSignIn, githubSignIn, signInwithEmailPassword, registerUser, setUserName, logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;