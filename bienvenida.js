document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.getElementById("continue-btn");
    const exitBtn = document.getElementById("exit-btn");
  
    continueBtn.addEventListener("click", function () {
      // Aquí puedes redirigir al usuario a la siguiente página o realizar alguna acción específica.
      window.location.href="/aula/aula.html"
    });
  
    exitBtn.addEventListener("click", function () {
      // Aquí puedes realizar alguna acción al salir, como cerrar la ventana.
      alert("Salir del sitio");
    });
  });
  