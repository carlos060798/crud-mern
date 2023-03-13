

// AQUI SE CONSUME EL CONTEXTO DE AuthProvider en cada usuario retornado
/***
 * 
 * 
 * 
 * 
 */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


export default function useAuth() {    
     return  useContext(AuthContext);
   }