(function(){
    //variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    // Funciones
    var agregarTarea = function(){
        alert("Agregar Tarea")
    };
    var comprobarInput = function(){
        alert("Comprobar Input")
    };
    var eliminarTarea = function(){
        alert("Eliminar Tarea")
    };
    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);
    
    // Borrando elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}());