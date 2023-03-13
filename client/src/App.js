import Routers from "./router/appRouter";
import AuthProvider from "./user/AuthProvider";


/*
* @module{<AuthProvider>} le da al apalicaicon un contesto global para consumir
 a los hijos dierecto del componete <ROUTERS>
*
*/
export default function App() {
  return (
    <div>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </div>
  );
}


