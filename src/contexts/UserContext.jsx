import React, { createContext, useEffect, useState } from 'react';
import { app } from '../fireBase/firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';


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
    const LogInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // REGISTER WITH EMAIL AND PASSWORD
    const registerUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd);
    }

    // SET PROFILE PICTURE 

    const setProfilePicture = (profilePictureUrl) => {
        return updateProfile(auth.currentUser, {
            photoURL: profilePictureUrl
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
        });

        return () => unsubscribe();
    }, [])

    console.log(user);

    return (
        <AuthContext.Provider value={{
            auth, user, setUSer, setError, setProfilePicture, googleSignIn, githubSignIn, LogInWithEmailAndPassword, registerUser, logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;