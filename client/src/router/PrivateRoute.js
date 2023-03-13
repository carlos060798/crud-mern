/**
 * 
 * @param {props} props  pasa los atributos de las rutas al componente privateRoute en appRoter
 * @returns 
 */
import { Redirect,Route } from "react-router-dom";
import useAuth from "../user/useAuth";

export default function PrivateRoute(props) {

  const {user}= useAuth();
   if(!user) return <Redirect to="/Login" />
  return (
    <Route {...props} />
  );
}

