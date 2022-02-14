import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeFirebase from "../Components/Login/Login/Firebase/Firebase.init";
// import initializeFirebase from "../Components/Login/Login/Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    // creating user
    const registerUser = (email, password, name, photo, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, photoURL: photo };
                setUser(newUser);
                // save user to the database
                saveUser(email, password, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/dashboard');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    // admin
    useEffect(() => {
        // fetch(`https://pacific-oasis-02900.herokuapp.com/users/${user.email}`)
        fetch(`https://kailashian-server.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, password, displayName, method) => {
        const user = { email, password, displayName };
        // fetch('https://pacific-oasis-02900.herokuapp.com/users', {
        fetch('https://kailashian-server.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;