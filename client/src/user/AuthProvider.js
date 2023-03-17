/**
 * AQUI SE CREA EL CONTEXTO DEL USUARIO
 * 
 * @param{ AutheContext} Crea el contexto global a exportar alos componertes segun cada usuario
 * 
 * @param { ContextValue} muestra la presentacion del modelo de los datos  pasados al AutheContext
 */
import {useState,createContext} from'react' 
import roles from '../help/roles';

// esta linea siempre eleva el context al scopre GLOBAL
export const AuthContext=createContext()

export default function AuthProvider({children}) {
   
  //const [user, setUser] = useState(null);
 const [user, setUser] = useState({id:1,role: roles.admin});


  //funciones de verificacion de usuario y rol

   const isloggin =()=> !!user;
   const hasRole=(role) =>  user?.role === role;

  const contextValue={
     user,
     isloggin,
     hasRole
   }
    
    return (
     <AuthContext.Provider value={contextValue}>
      { children }
     </AuthContext.Provider>
    );
  }
  
  