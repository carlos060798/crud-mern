import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import HomePages from '../PAGES/HomePages'
import LoginPages from '../PAGES/LoginPages'
import RegisterPages from '../PAGES/RegisterPages'
import AccountPages from '../PAGES/AccountPages'
import ProyectsPages from '../PAGES/ProyectsPages'
import ProyectPages from '../PAGES/ProyectPages'
import AdminusertPages from '../PAGES/admin/AdminusertPages'
import NotPages from '../PAGES/NotPages';
import Layaut from '../Component/Layauts/layaut';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../help/roles'
import rutas  from '../help/rutas'





/*
 * FUNCION CONTEENDORAS DE RUTAS
 *  opcion default{ <Route exact path='*'component={NOtPages}/>}
 * 
 * @param{PrivateRouter} para proteger las rutas en react privadas mediante el componete PrivateRouter
 * @param{PublicRouter} para resyingri el acceso ha usuarios regsitrados a rutas que no requieren
 */
export default function Routers() {
  return (
    <Router>
      <Layaut>
      <Switch>
        <PublicRoute exact path={rutas.HomePages} component={HomePages} />
        <PublicRoute exact path={rutas.LoginPages}  component={LoginPages} />
        <PublicRoute exact path={rutas.RegisterPages}  component={RegisterPages} />
        <PrivateRoute exact path={rutas.AccountPage}  component={AccountPages} />
        <PrivateRoute exact path={rutas.ProyectsPages} component={ProyectsPages} />
        <PrivateRoute exact path={rutas.ProyectPages()} component={ProyectPages} />
        <PrivateRoute hasRole= {roles.admin} exact path={rutas.Admin.users} component={AdminusertPages} />

        <Route exact path="*" component={NotPages} />
      </Switch>
      </Layaut>
    </Router>
  );
}
