import Navigetor from "../Navegador";

/**
 * 
 * @param {Children}  con este argumento se renderizan los elementos dentro del layaut y footer
 * @returns 
 */

export default function Layau({children}){
    
    return (
      <><Navigetor/>
       {children}
    
      </>
    );
  
  

}