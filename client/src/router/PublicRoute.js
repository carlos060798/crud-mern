import { Redirect,Route } from "react-router-dom";
import rutas from "../help/rutas";
import useAuth from "../user/useAuth";

export default function PublicRoute(props) {
    
      const {isloggin}= useAuth();
       if(isloggin()) return <Redirect to={rutas.ProyectsPages} />
      return (
        <Route {...props} />
      );
}
