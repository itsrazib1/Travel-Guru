import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../firebase.config";
export const Authcontext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {
    const [user,setuser] = useState(null);


    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const singIn = (email ,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
  
  const Authinfo = {
    user,
    createUser,
    singIn,
    logOut
  };

  return (
    <Authcontext.Provider value={Authinfo}>
        {children}
        </Authcontext.Provider>
  );
};

export default Authprovider;
