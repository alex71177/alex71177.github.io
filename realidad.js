// window.addEventListener("onload",function() {
//     realida()
// })
// function realida() {
//     window.location.href="./RV/RV.html"
// }
const navegador = document.getElementById("navegador")
const cerrar = document.getElementById("cerrar")
const btnrv = document.getElementById("btnrv")


btnrv.addEventListener("click",(e)=>{
   e.preventDefault()
  
 if (navegador.style.display==="none" ) {
navegador.style.display="inline"

 } else {
   navegador.style.display="none"
 
 }
  
 })
 cerrar.addEventListener("click",(e)=>{
  e.preventDefault()
    navegador.style.display ="none"
 
 })