const email = document.getElementById("email")
const  btnboton = document.querySelector("[data-btn]")
const mensje = document.getElementById("mensaje")
const form= document.querySelector("form");

form.ge
form.addEventListener("submit",(e)=> {
  e.preventDefault();

  if (email.value ="") {
mensje.textContent="Debes ingresar un email valido"
mensje.style.color="red"  
   }
   else{
    Swal.fire({
      title: 'Restablesiendo contraseña',
      
      // showClass: {
      //   popup: 'animate__animated animate__fadeInDown'
      // },
      // hideClass: {
      //   popup: 'animate__animated animate__fadeOutUp'
      // }
    })
    setTimeout(() => {
      window.location.href="../validacion-registro/validacion-registro.html"
    },3000);
   }

   setTimeout(() => {
    mensje.style.display="none"
   
   }, 2000);
   
 

})
window.close("")