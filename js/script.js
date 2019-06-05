/* cambiar este por la informacion que nos paso Lisi para llamar el elemento*/
/*agregar un chismo add event listener y agregarlo al evento click, y despues buscar con un document.getElementById para obtener el nodo y buscar su valor*/

/*let formularioPrincipal=document.getElementById("frmBienvenida");*/


/*implementar el evento click del DOM*/
const btnInicio = document.getElementById("btnInicio")
btnInicio.addEventListener('click',displayName);

function displayName (event)
{
  /*Prevvenir el comportamiento por defecto*/
  event.preventDefault();
  console.log("si entro");
  const name = document.getElementById("txtNombre").value;
  document.getElementById("jugador").innerHTML = name;
  /*suplir el .value por un string vacio*/
  document.getElementById("txtNombre").value=" ";
  /*element.addEventlistener("click",value"");*/
}
