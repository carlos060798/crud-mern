/**
 * 
 * @param {props} props  pasa los atributos de las rutas al componente privateRoute en appRoter
 * @returns 
 * if(role && user?.role !== role)  este y aplica para el tipo de rol en el component admin solo si existe el user
 */
import { Redirect,Route, useLocation } from "react-router-dom";
import useAuth from "../user/useAuth";
import rutas  from '../help/rutas'


export default function PrivateRoute({hasRole:role,...props}) {
  const location=useLocation()
  const { hasRole, isloggin}= useAuth();
  if(role && !hasRole(role)) return <Redirect to={rutas.HomePages} />
   if(!isloggin()) return <Redirect to={{pathname: rutas.LoginPages,state:{from:location}}} />
  return (
    <Route {...props} />
  );
}

