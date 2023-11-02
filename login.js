const btncheckbox = document.getElementById("btncheckbox");
const form= document.querySelector("form");
const btnbotonReset = document.getElementById("btnbotonReset");
const mensaje = document.getElementById("mensaje");
const password = document.getElementById("password")
const email = document.getElementById("email")
const mensajeInput = document.getElementById("mensajeInput");
const locarstoras = document.getElementById("locarstoras")
const mensajeValidacion = document.getElementById("mensajeValidacion")
const registro = document.getElementById("registro")




// fata validar los campos al ingresar datos errones
form.addEventListener("submit",(e)=> {
  e.preventDefault();


  if ( password.value == 123 && email.value =="alexyesid711@gmail.com") {
    window.location.href="../paginaPrincipal/paginaPrincipal.html"
  }

    else if (password.value == "" && email.value =="") {
      mensajeValidacion.textContent="Lo sentimos debe llenar los campos "
      
      setTimeout(() => {
        mensajeValidacion.style.display= "none"
      }, 2100);
  } else {
    mensajeValidacion.textContent="Lo sentimos debe llenar los campos"
    setTimeout(() => {
      mensajeValidacion.style.display= "none"
      const password = document.getElementById("password").value=""
      const email = document.getElementById("email").value=""
    }, 2100);
  }
  

});
registro.addEventListener("click",()=> {
  Window.location.href="../registro/registro.html"
})


