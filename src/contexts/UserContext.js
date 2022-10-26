import React from 'react';
import { createContext, useEffect } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import app from './../firebase/firebase.config';
import { useState } from 'react';




export const AuthContext = createContext()
const auth = getAuth(app)


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const githubProviderLogin = (gitHubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const forgetPassword = (email) => {
       return sendPasswordResetEmail(auth, email)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo =
    {
        user,
        providerLogin,
        logOut,
        createUser,
        signIn,
        loading,
        updateUserProfile,
        githubProviderLogin,
        forgetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;