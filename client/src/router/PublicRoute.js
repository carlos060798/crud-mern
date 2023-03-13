import { Redirect,Route } from "react-router-dom";
import useAuth from "../user/useAuth";

export default function PublicRoute(props) {
    
      const {user}= useAuth();
       if(user) return <Redirect to="/Proyects" />
      return (
        <Route {...props} />
      );
}
