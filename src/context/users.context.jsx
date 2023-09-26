// users.context.js
import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getUserByEmail,auth } from "../utils/firebase";

export const UsersContext = createContext({
  user:{}
});



export function UsersProvider({ children}) {
  const [user, setUser] = useState(null);

  const login=async(email,password)=>{
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      fetchUserByEmail(email);
      return userCredential.user;
    }catch(error){
      alert("login error:"+error);
    }
  }

  const fetchUserByEmail = async (email) => {
    console.log("测试email"+email);
    if (email) {
      const fetchedUser = await getUserByEmail(email);
      
      console.log("在context:", fetchedUser);
      setUser((prevUser) => {
        return fetchedUser;
      });
    }
  };

  const logout=async()=>{
    try{
      await signOut(auth);
      setUser(null);
      return true;
    }catch (error){
      alert("Logout error:", error);
    }
  }
  



const value = {
  user,
  fetchUserByEmail:fetchUserByEmail,
  login:login,
  logout:logout
  };

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
}



export function useUsers() {
return useContext(UsersContext);
}

