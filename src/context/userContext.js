import React,{ createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    signInWithEmailAndPassword
} from "firebase/auth";
import {
    setDoc,
    doc
} from "firebase/firestore";
import {auth, db} from "../firebase";


export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const registerUser = (email, username, password) => { //register function
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then((res) => { //create user using emial and password in firebase
            setDoc(doc(db, "Users",res.user.uid),{
                username: username,
                email: res.user.email
            }).then(()=>{
                window.location.assign("/signin");
            })
            updateProfile(auth.currentUser, {
                displayName : username,
            });
        })
        .catch(err => setError(err.message)).finally(() => setLoading(false));
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password) // signin firebase account using email and password
    }

    const logoutUser = () => { // logout function to remove uid from localstorage
        localStorage.setItem('userUID', "");
        window.location.assign("/signin");
        signOut(auth);
    };

    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        logoutUser,
        signInUser
    }

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
}

