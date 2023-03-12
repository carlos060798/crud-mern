import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import HomePages from '../PAGES/HomePages'
import LoginPages from '../PAGES/LoginPages'
import RegisterPages from '../PAGES/RegisterPages'
import AccountPages from '../PAGES/AccountPages'
import ProyectsPages from '../PAGES/ProyectsPages'
import ProyectPages from '../PAGES/ProyectPages'
import AdminusertPages from '../PAGES/admin/AdminusertPages'
import NotPages from '../PAGES/NotPages'





/*
 * FUNCION CONTEENDORAS DE RUTAS
 *  opcion default{ <Route exact path='*'component={NOtPages}/>}
 */
export default function Routers() {
  return (
    <Router>
   
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Route exact path="/Login" component={LoginPages} />
        <Route exact path="/Register" component={RegisterPages} />
        <Route exact path="/Account" component={AccountPages} />
        <Route exact path="/Proyects" component={ProyectsPages} />
        <Route exact path="/Proyect/:Proyectid" component={ProyectPages} />
        <Route exact path="/Admin/User/Proyects" component={AdminusertPages} />

        <Route exact path="*" component={NotPages} />
      </Switch>
     
    </Router>
  );
}
