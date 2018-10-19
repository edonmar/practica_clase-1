window.onload = function(){
   
 user_pass();
}
function user_pass() {
    usuario = prompt("Introduce tu usuario: ");
    while(usuario == null || usuario == ""){
        usuario = prompt("En serio, introduce un nombre ¬¬");
    }
//    pass = prompt("Introduce la contraseña: ");
    escribir_nombre(usuario);
    
}
function escribir_nombre(user){
     bienvenida = document.getElementById("welcome");
    bienvenida.innerHTML +=", "+user;
}