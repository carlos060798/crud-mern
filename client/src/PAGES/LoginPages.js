import { useLocation } from "react-router-dom";
import useAuth from "../user/useAuth";



const usercredencial={};
export default function AppLogin(){
  const location=useLocation()
  console.log(location)
  const {loggin} =useAuth();  
    return (
      <div>


        <h1>Login
</h1>
 <button onClick={()=>loggin(usercredencial,location.state?.from)}>Inicio de seccion</button>

      </div>
    );
  
  

}