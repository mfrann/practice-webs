function agregarTarea() {
    var nuevaTareaInput = document.getElementById("nuevaTarea");
    var nuevaTareaTexto = nuevaTareaInput.value.trim();
  
    if (nuevaTareaTexto !== "") {
      var listaTareas = document.getElementById("tareas");
      var nuevaTarea = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        marcarTareaCompletada(this);
      });
  
      nuevaTarea.appendChild(checkbox);
      nuevaTarea.appendChild(document.createTextNode(" " + nuevaTareaTexto));
      listaTareas.appendChild(nuevaTarea);
  
      nuevaTareaInput.value = "";
    }
  }
  
  function marcarTareaCompletada(checkbox) {
    var tarea = checkbox.parentNode;
    tarea.classList.toggle("completed", checkbox.checked);
  }

  function borrarTareas(){
    var listaTareas = document.getElementById("tareas");
    listaTareas.innerHTML = "";
  }



  