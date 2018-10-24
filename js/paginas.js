window.onload = function(){
    document.getElementById("nueva_fila").setAttribute("onclick","nueva_fila()");
    document.getElementById("eliminar_fila").setAttribute("onclick","eliminar_fila()");
}
function nueva_fila(){
    var ok = true;
    
    while(ok){
        var tema = prompt("Indique el Tema:");
        if(tema != ""){
            ok = false;
        }
    } 
    
    ok = true;
    
    while(ok){
        var nota = prompt("Indique la Nota:");
        if(tema != ""){
            ok = false;
        }
    }
    var table = document.getElementById("tabla");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = tema;
    cell2.innerHTML = nota;
    
}
function eliminar_fila(){
    var numero = prompt("Indique el Numero de Fila a eliminar:");
     var table = document.getElementById("tabla").deleteRow(numero);
}