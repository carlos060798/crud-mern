import AppRouters from "./router/appRouter";
import AuthProvider from "./user/AuthProvider";
import {BrowserRouter as Router} from 'react-router-dom'
import Layaut from './Component/Layauts/layaut';
/*
* @module{<AuthProvider>} le da al apalicaicon un contesto global para consumir
 a los hijos dierecto del componete <ROUTERS>
*
*/
export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
        <Layaut>
          <AppRouters />
          </Layaut>
        </AuthProvider>
      </Router>
    </div>
  );
}


