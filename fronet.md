# notas de reac

# 1 crear un proyecto

--   
# 2 para levantar  el servidor de react js
-- npm run star    

# tener en cuenta en como en el funcionamiento

app.js funcion lanzadora o callback que ejecuta la aplicacion
index.js renderiza toda la aplicacion con el llamado de  la funcion app 

# 3 crear rutas
dependencia de rooter
---npm i react-router-dom@5.2.0 

se crea la carpeta router --contiene las rutas del proyecto de from 'react-router-dom'

se importan los siguinetes elementos 
import {Browser as Router,
Switch,
Route}  

# en la funcion AppROUTER se crean las rutas del proyecto
export default function AppRouter(){
    
        return (
        <Router> { este argumento contiene las rutas}
            <Switch> { este argumento contiene las opciones de las rutas que esten creadas}
                <Route exact path='/'component={HomePages}/> {asi se de claran las rutas}
                
            </Switch>
        </Router>
        );
      
      
    
}
# se crean los componentes en la carpeta Pages
--esta carpeta tiene las funciones que se van  llamar segun la ruta

--se importan las rutas

{
import HomePages from '../PAGES/HomePages'
import LoginPages from '../PAGES/LoginPages'
import RegisterPages from '../PAGES/RegisterPages'
import AccountPages from '../PAGES/AccountPages'
import ProyectsPages from '../PAGES/ProyectsPages'
import ProyectPages from '../PAGES/ProyectPages'
import AdminusertPages from '../PAGES/admin/AdminusertPages'
import NotPages from '../PAGES/NotPages'

} 

#  siguinte paso se crean los elemetos 
-navigator
-carpeta layaut y ele  elemto layaut con el fin de que renderize todoos los eleemtos de la pagina 

--- se agrega el componente de layut en la appROUTER

---en el componente layuout se agrega el objeto{children } para que  se renderizen los elementos dentro del Switch


# se instala react boostrapt para el maquetado
--npm install react-bootstrap bootstrap 

-- se hace la importacion de los estilo de booptrap en el index.js
import 'bootstrap/dist/css/bootstrap.min.css';  

# creando rutas en el navigator
import{NavLink}from 'react-router-dom'
se importa el elemeto Navlik para colocar las rutas en la barra de navEGACION CON LA ATRIBUTO TO
 <Nav.Link as={NavLink} to="/Proyects"> Proyect   </Nav.Link>
 se agrega el atributo as={tipo de componete} para decir como se debe renderizar el elemento
 --
            
    


# PROTEGIENDO RUTAS  


1- Se crea el componente PrivateRouter y se agrega sobre la ruta a proteger
 <PrivateRoute exact path="/Account" component={AccountPages} />
2- se crea el componente PrivateRouter en router
export default function PrivateRoute(props) {

  const User=null;
   if(!User) return <Redirect to="/Login" />
  return (
    <Route {...props} />
  );
} 

la funcion devuel el acceso si el usuario existe si no  lo deja en  login

3- se importa appRouter  listo 

# autenticaion de usuario  privadas

1-  en la funcion App() pasamos el contexto global por elemento AuthProvider de cada posible usuario de la aplicacion
function App() {
  return (
   <div>
    <AuthProvider>
    <Routers />
    </AuthProvider>
    </div>
  );
}
2- se crea el componete  export const AutheContext=CreateContext  AuthProvider este elemento va crear el contexto que se pasa en el app()



export default function AuthProvider() {
   
   const [user,setUser] =useState(null)
    ContextValue={
     user
   }
    
    return (
     <AutheContext value={ContextValue}>

     </AutheContext>
    );
  }

  
3-elevar que esta linea simepre va agenerar el contexto global en un score global
export const AutheContext=CreateContext 

4-se comnsume el  contexto  global de forma invidual segun cada usuario mediante  el componete userAuth()
import { useContext } from "react";
import { AutheContext } from "./AuthProvider";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


export default function useAuth() {    
     return  useContext(AuthContext);
   } 

5- renderizar los hijo de al AuthProvider  mediante el argumento {children}

export default function AuthProvider({children}) {
   
  const [user, setUser] = useState(null);
 //const [user, setUser] = useState({id:1,role:'regular'});
  const contextValue={
     user,
   }
    
    return (
     <AuthContext.Provider value={contextValue}>
      { children }
     </AuthContext.Provider>
    );
  } 

  # autenticacion de rutas publicas

1- se agrega el componet PublicRoute alas rutas publicas en appRouter
<PublicRoute exact path="/Login" component={LoginPages} />
<PublicRoute exact path="/Register" component={RegisterPages} />

2- como tiene la misma logica de PrivateRoute se copia el misma funcion solo cambia la comprobacion  y el redireciomiento

import { Redirect,Route } from "react-router-dom";
import useAuth from "../user/useAuth";

export default function PublicRoute(props) {
    
      const {user}= useAuth();
       if(user) return <Redirect to="/Proyects" />
      return (
        <Route {...props} />
      );
}


# roles de administrador  de cuentas
1- se modifica el appRouter en  la ruta de administracion de cuenta agregandoe el atributo hasRole="admin" para defefinir el tipo de permimos

 <PrivateRoute hasRole="admin" exact path="/Admin/Users" component={AdminusertPages} />  

2-se  modifica el parametro que recibe el PrivateRoute con el valor hasRole: role
export default function PrivateRoute({hasRole:role,...props}) 

3- se valida si exite el rol o si es igual al referenciado  inicialmente
 if(role && user?.role !== role) return <Redirect to="/Login" />

4 se  vuelven constantes los atributos de roles para eviatr errores de scopre mas adelante se crea el arcchivo
roles js
export default roles={
 admin: '',
 regular: 'regular',
}

5- se cambian en approuter el  hasRole 
    <PrivateRoute hasRole= {roles.admin} exact path="/Admin/Users" component={AdminusertPages} />


# se cambian las rutas en constantes y se cambian en el router y en el navigator
 const rutas = {
  HomePages: "/",
  LoginPages: "/Login",
  RegisterPages: "/Register",
  AccountPage: "/Account",
  ProyectsPages: "/Proyects",
  ProyectPages: (Projectid)=>( Projectid ? `/Proyects/:${Projectid}`:"/Proyects/:Proyectid"),
  Admin: {
   users: "/Admin/Users",
  }
}
export default rutas;

# se crean funciones para  validar  como  si el usuario esta loguidado y se agregan al  authProvider
 const isloggin =()=> !!user;
   const hasRole=(role) =>  user?.role === role;
1- se consume globalmete en el contextValue
const contextValue={
     user,
     isloggin,
     hasRole
   }

2- se cambia  las valdaciones en PrivateRoutes por la siguintes validaciones
 const { hasRole, isloggin}= useAuth();
  if(role && !hasRole(role)) return <Redirect to={rutas.HomePages} />
   if(! isloggin()) return <Redirect to={rutas.LoginPages} />

3-se cambia  las valdaciones en PublicRoute por la siguintes validaciones

 const {isloggin}= useAuth();
       if(isloggin()) return <Redirect to={rutas.ProyectsPages} />