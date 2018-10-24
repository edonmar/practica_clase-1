window.onload = function(){
   
 //user_pass();
definir_click();
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
function definir_click(){
    var celdas = document.getElementsByName("asignatura");
    
    for (i = 0; i <celdas.length;i++){
        celdas[i].addEventListener("click",function(){
            location.href = "paginas/"+this.className+".html";
        });
    }
}