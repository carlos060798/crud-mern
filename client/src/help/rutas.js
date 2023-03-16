/**
 * 
 *  ProyectPages: (Projectid)=>( Projectid ? `/Proyect/:${Projectid}`:"/Proyect/:Proyectid"),
 * funcion evalua si existe el id referenciado sino pasa la ruta generica
 * 
 */

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