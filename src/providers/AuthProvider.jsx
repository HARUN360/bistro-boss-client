import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from './../hukse/useAxiosPublic';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
     const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth ,email, password)
     }
    //  google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    //  logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    // update 
    const updateUserPhofile = (name, photo) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
             console.log('Current user ', currentUser);
             setUser(currentUser);

            //  jwt start
            if(currentUser){
                    // get token and store client
                    const userInfo = {email: currentUser.email}
                    axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })

            }
            else{
            //  Todo: remove token(if token stored in the client side: local storage or coking)
            localStorage.removeItem('access-token');
            }
            // jwt end
             setLoading(false);
            
         });
         return () => {
             unSubscribe()
         }
     },[axiosPublic])

    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      updateUserPhofile,
      googleSignIn,
      
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;