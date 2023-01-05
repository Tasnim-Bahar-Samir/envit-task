import React, { createContext, useEffect, useState } from 'react'
import app from '../../Firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
export const authProvider = createContext()

const auth = getAuth(app)
const UserContext = ({children}) => {
    const[user,setUser] = useState('')
   
    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const UserLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    
    const userInfo = {user,createUser,UserLogin}
  return (
    <authProvider.Provider value={userInfo}>
        {children}
    </authProvider.Provider>
  )
}

export default UserContext