function validarDatos(){
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var direccion = document.getElementById("address").value;
  var seleccion = document.getElementById("seleccion");

//document.getElementById("suscribirse").addEventListener('click', function(){
  if(nombre == "" || nombre == null){
    alert("No olvides ingresar tu nombre");
  }else if(correo == "" || /\S+@\S+\.\S+/.test(correo) == false) {
    alert("No olvides ingresar tu correo electrónico y que éste tenga un formato válido");
  }else if(direccion == "" || direccion == null){
    alert("No olvides ingresar tu dirección");

  }else if(document.getElementById("seleccion").value == "0" || document.getElementById("seleccion").value == null){
    alert("No olvides seleccionar tu set de té favorito");
  }
  else{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("seleccion").value = "";
    alert("Muchas gracias por suscribirte");
  }

}
validarDatos();
