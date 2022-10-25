import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from './../firebase/firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app)


const UserContext = ({children}) => {

    const user = {displayName: 'batash ali'}

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }



    const authInfo = {user, providerLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;