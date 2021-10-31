import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializeApp from "./Firebase.init";

const useFirebase = () => {
    firebaseInitializeApp();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const handleRegistration = e => {
        e.preventDefault();
        if(password.length < 6 ){
            setError('Password Must be at least 6 characters long.')
            return;
        }

        isLogin? processLogin(email, password) :createNewUser(email, password)
        
    }

    const processLogin = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() =>  setIsLoading(false));
    }


    const createNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword( auth, email, password)
        .then(res => {
            setUser(res.user)
            console.log(res.user);
            setError('');
        })
        
        .catch(error =>{
            setError(error.message);
        })
        .finally(() =>  setIsLoading(false));
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .finally(() =>  setIsLoading(false));
        
    }
   
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() =>  setIsLoading(false));
    }

    useEffect(() => {
       onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        
    }, [])

    return{
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggleLogin,
        isLogin,
        isLoading
    }
}

export default useFirebase;