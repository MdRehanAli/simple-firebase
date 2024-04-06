import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null)


    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error: ', error.message)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            {
                // user? Logout: sign in
            }
            {
                user ?
                    <button onClick={handleGoogleSignOut}>Google Log Out</button> :
                    <button onClick={handleGoogleSignIn}>Google Log in</button>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;