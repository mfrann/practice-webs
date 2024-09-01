
document.getElementById('nuevaTarea').addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    agregarTarea();
  }
});



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
        showMessage()
        guardarTareas()
      });
      

      var button = document.createElement("button")
      button.id = "myButton"
      var icon = document.createElement("i")
      icon.className = "fa-solid fa-xmark"

      button.appendChild(icon)
      
      button.addEventListener("click", function(){
        borrarTareas(this)
        guardarTareas()
      });

      nuevaTarea.appendChild(checkbox);
      nuevaTarea.appendChild(document.createTextNode(" " + nuevaTareaTexto));
      nuevaTarea.appendChild(button)
      listaTareas.appendChild(nuevaTarea);

      nuevaTareaInput.value = "";
    }
  }
  
  function marcarTareaCompletada(checkbox) {
    var tarea = checkbox.parentNode;
    tarea.classList.toggle("completed", checkbox.checked);

    if(checkbox.checked){
      var sonido = document.getElementById("sonidoCompletado");
      sonido.play();
    }
    tarea.parentNode.removeChild(tarea)
  }

  function showMessage(){
    const msg = document.getElementById('msg');
    msg.classList.add('show');
    msg.classList.remove('hidden');
    
    setTimeout(() => {
      msg.classList.add('hidden');
      msg.classList.remove('show');
    }, 500);
  }
  function borrarTareas(button){
    var tarea = button.parentNode;
    tarea.parentNode.removeChild(tarea);
  }


  function guardarTareas(){
    const tareas = []
    document.querySelectorAll('#tareas li').forEach(li => {
      const tarea = {
        text: li.textContent.trim(),
        done: li.querySelector('input').checked
      };

      tareas.push(tarea)
    });

    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  function cargarTareas(){
    const saveTasks = JSON.parse(localStorage.getItem('tareas')) || [];
    saveTasks.forEach(tarea => {

      var listaTareas = document.getElementById("tareas");
      var nuevaTarea = document.createElement("li");

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        marcarTareaCompletada(this);
        showMessage()
        guardarTareas()
      });
      

      var button = document.createElement("button")
      button.id = "myButton"
      var icon = document.createElement("i")
      icon.className = "fa-solid fa-xmark"

      button.appendChild(icon)
      
      button.addEventListener("click", function(){
        borrarTareas(this)
        guardarTareas()
      });

      nuevaTarea.appendChild(checkbox);
      nuevaTarea.appendChild(document.createTextNode(" " + tarea.text));
      nuevaTarea.appendChild(button)
      listaTareas.appendChild(nuevaTarea);

    })
  }

document.addEventListener('DOMContentLoaded', cargarTareas);

// let isVisible = false;

// function toggleMenu(){
//   const toggleMenu = document.getElementById('toggleMenu');
//   const myMenu = document.getElementById('myMenu');
//   const myText = document.getElementById('myText')
  
//   toggleMenu.addEventListener("click", function(){
//     if(isVisible){
//       myMenu.style.left = "-320px";
//       myText.style.marginLeft = "300px";
//     }
//     else{
//       myMenu.style.left = "0";
//       myText.style.marginLeft = "0";
//     }
  
//     isVisible = !isVisible;
//   });

// }

// toggleMenu()

  