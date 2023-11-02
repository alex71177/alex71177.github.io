const buscar =document.getElementById("buscar")
const informacionbuscar = document.getElementById("informacionbuscar")
const asignatura = document.getElementById("asignatura")
const modal = document.getElementById("modal")
const btnmodal = document.getElementById("btnmodal")
const fecha =document.getElementById("fecha")
const info =document.getElementById("info")
const   btncatedraPersonal = document.getElementById("btncatedraPersonal")
const modulosmaterias1= document.getElementById("modulos-materias1")
const ventanamodal = document.getElementById("ventanamodal")

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click",(e)=>{
e.preventDefault()
const query = document.getElementById("buscar").value;
const resultsContainer = document.getElementById("search-results");

resultsContainer.innerHTML = "<p>Resultados de búsqueda: " + "<br>"+ query + "</p>";

});



    

// window.addEventListener("load", function( ) {
//     apiLibros() 
// })
 



// opcion de la modal
btnmodal.addEventListener("click",(e)=>{
    e.preventDefault()
   
  if (modal.style.display==="inline" ) {
 modal.style.display="none"
 btnmodal.style.display="none"
  } else {
    modal.style.display="inline"
  
  }
   
  })
// opcion de catedra personal


btncatedraPersonal.addEventListener("click",(e)=>{
    e.preventDefault()
if (modulosmaterias1.style.display==="none") {
    modulosmaterias1.style.display="inline"
    setInterval(() => {
      ventanamodal.style.opacity=1
    },1000);
} else {
    modulosmaterias1.style.display="none"
}
})
    
 // Función de búsqueda



let horario = new Date()
let todaFecha= horario.toLocaleTimeString()
fecha.append(todaFecha)

calculo.addEventListener("click",(e)=>{
    e.preventDefault()
  
} )




//  window.location.href=""
// window.addEventListener("DOMContentLoaded",function () {
//   loaduser()
//   console.log("cargando datos")


  
// })
// async function loaduser(){
//   const url= await fetch("https://fakerapi.it/api/v1/persons?_quantity=1000")
//   return await url.json()
// }


// buscar.addEventListener("keyup" ,e => {
//   console.log(buscar.value)

// })



// const menuamburgesa = document.querySelector("#menuamburgesa")


// menuamburgesa.addEventListener("click",function(){

//     const men = document.getElementById("menu")
//     if (men.style.display === "inline") {
//         men.style.display = "none";
//         btnmas.textContent="Leer mas..."
    
//       } else {
//         men.style.display = "inline";
//         btnmas.textContent="ocultar"
//       }
// })


// const menurv = document.getElementById("menurv")
// const vermenurv = document.querySelector("section")
// const cerrarventana = document.getElementById("cerrarventana")
// menurv.addEventListener("click",function() {

//   if (vermenurv.style.display === "inline") {
//     vermenurv.style.display = "none";
//     btnmas.textContent="Leer mas..."

//   } else {
//     vermenurv.style.display = "inline";
//     btnmas.textContent="ocultar"
//   }
// })

// cerrarventana.addEventListener("click",()=> {
//  if (cerrarventana.style.display === "inline") {
//   cerrarventana.style.display = "none";

// }


// })

// const asignatura = document.getElementById("asignatura")
// const modalAsignatura = document.getElementById("modalAsignatura")

// asignatura.addEventListener("click",()=>{
//   const datolAsignatura= document.createElement("div")
//   datolAsignatura.innerHTML=" <p>jajajajaj</p>"
//   modalAsignatura.append(datolAsignatura)
//   console.log(datolAsignatura)


// })

// se debe arregra 

// const link__documentacion = document.getElementById("link__documentacion")
// const  contenedor__documentos= document.getElementById("contenedor__documentos")



//   documentos.forEach(d => {
    
//   link__documentacion.addEventListener("click",function(){
  
//     const container__datos__documentos= document.createElement("div")
//     container__datos__documentos.classList.add("menu__container__datos__documentos")
//      container__datos__documentos.innerHTML =` <p>${d.titulo} </p>
//      <p>${d.autor} </p>
//      <p>${d.año} </p>
//      <p>${d.pais} </p>
//      `
//      contenedor__documentos.append(container__datos__documentos)
//      console.log(contenedor__documentacion)
//    })
    
//   });


   



  
