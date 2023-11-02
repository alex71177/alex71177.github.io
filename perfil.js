
const btnregistro = document.getElementById("btnregistro")
const menupais = document.getElementById("menu__pais")
const form =document.querySelector("form")
const menu__pais = document.getElementById("menu__pais")
const email = document.getElementById("email")


btnregistro.addEventListener("click",(e) =>{
  e.preventDefault()
  if (menu__pais.value != "" && email.value != "" ) {
    window.location.href="../paginaPrincipal/paginaPrincipal.html"
 
  }else{
alert("Lo sentimos debe llenar todos los campos ")
  }

})


const defaultFile = '../imagenes/mujernegra1.jpg';
const file = document.getElementById( 'foto' );
const img = document.getElementById( 'img' );
file.addEventListener( 'change', e => {
  if( e.target.files[0] ){
    const reader = new FileReader( );
    reader.onload = function( e ){
      img.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0])
  }else{
    img.src = defaultFile;
  }
} );


const lista = []
fetch("../perfil/paises.json")
.then(res => res.json())
.then(data => {
  data.forEach( d => {
  const opcion = document.createElement("option")
  opcion.innerHTML = ` <option value="">${d.pais} </option>`
  menupais.appendChild(opcion)
  console.log(menupais)
  });


});

// const tbody = document.querySelector("tbody")

// const listaPerfiles= []

// function guardar() {
//   const menu__pais = document.getElementById("menu__pais").value
//   const nombre = document.getElementById("nombre").value
//   const apellido= document.getElementById("apellido").value
//   const email = document.getElementById("email").value
//   const telefono = document.getElementById("telefono").value

//   const tr = document.createElement("tr")
//   tr.innerHTML= `  <td>${nombre} </td>  <td>${apellido} </td>  <td>${email} </td>  <td>${telefono} </td>  <td>${menu__pais} </td> `
//   tbody.appendChild(tr)
//   console.log( tbody)
// }