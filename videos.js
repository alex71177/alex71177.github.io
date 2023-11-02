


const secion_dos =document.getElementById("secion_dos")
const ver_mas  = document.getElementById("ver_mas")
const histroia = document.getElementById("historia")
const opcioncatedra = document.getElementById("opcioncatedra")


     


histroia.addEventListener("click",(e)=>{
e.preventDefault()

if (histroia.value==="historia") {
    alert("ya")
    secion_dos.style.display ="inline"
  

}else{
    alert("no")
//     secion_dos.style.display ="none"
//     setTimeout(() => {
//         ver_mas.style.display ="none"
//         historia.style.display ="none"
//     }, 1000);
 }
}) 

