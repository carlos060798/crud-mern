import useAuth from "../user/useAuth";



const usercredencial={};
export default function AppLogin(){

  const {loggin} =useAuth();  
    return (
      <div>


        <h1>Login
</h1>
 <button onClick={()=>loggin(usercredencial)}>Inicio de seccion</button>

      </div>
    );
  
  

}