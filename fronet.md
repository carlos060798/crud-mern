# notas de reac

# 1 crear un proyecto

--   npx create-react-app 
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

