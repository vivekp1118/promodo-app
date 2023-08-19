import {useState,createContext } from "react";

const AuthContext = createContext();
function AuthProvider({children}) {
    const [isLogined, setIsLogined] = useState(false);
    
    function setLogin(islogin){
        setIsLogined(islogin);
    }
    return ( 
    <AuthContext.Provider value={{isLogined,setLogin}}>
        {children}
    </AuthContext.Provider> 
    );
}

export  {AuthProvider,AuthContext};