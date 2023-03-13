/**
 * 
 * @param {props} props  pasa los atributos de las rutas al componente privateRoute en appRoter
 * @returns 
 * if(role && user?.role !== role)  este y aplica para el tipo de rol en el component admin solo si existe el user
 */
import { Redirect,Route } from "react-router-dom";
import useAuth from "../user/useAuth";

export default function PrivateRoute({hasRole:role,...props}) {

  const {user}= useAuth();
  if(role && user?.role !== role) return <Redirect to="/Login" />
   if(!user) return <Redirect to="/Login" />
  return (
    <Route {...props} />
  );
}

