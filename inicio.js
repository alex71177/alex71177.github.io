window.addEventListener("DOMContentLoaded",inicio)


function inicio() {
  const progreso=document.getElementById(`progreso`)
  const porcentaje=document.getElementById(`porcentaje`)
  let cantidad=0

  let tiempo= setInterval(() => {
    cantidad +=1
    progreso.style.width =`${cantidad}% `

  if (cantidad == 100) {

   window.open("../validacion-registro/validacion-registro.html"); 
  //  window.close("../login/login.html")
   window.close("../inicioInterfaz"); 
    clearInterval(tiempo)
  }
   porcentaje.textContent=`${cantidad}% `
  }, 300);

}

  

  