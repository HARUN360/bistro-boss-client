import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

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
            
             console.log('user in the auth state change', currentUser);
             setUser(currentUser)
             setLoading(false);
            
         });
         return () => {
             unSubscribe()
         }
     },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      updateUserPhofile,
      
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;