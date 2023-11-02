const menu =  document.getElementById("menu")
const btnmenuhambuguesa = document.getElementById("btnmenuhambuguesa")
const cerrar = document.getElementById("cerrar")
const chatconta = document.getElementById("chat-container")


btnmenuhambuguesa.addEventListener("click",function(e) {
    e.preventDefault()
  
    if (menu.style.display === "none") {
        menu.style.display = "inline"       
       } else {
        menu.style.display = "none"
       } 
}) 

cerrar.addEventListener("click",function(e) {
    e.preventDefault()
  
    if (chatconta.style.display === "none") {
        chatconta.style.display = "inline" 
        whatsapp.style.display = "none"      
       } else {
        chatconta.style.display = "none"
        whatsapp.style.display = "inline"   
       } 
}) 

// const chatOutput = document.getElementById('chat-output');
// const userInput = document.getElementById('user-input');
// const sendButton = document.getElementById('send-button');
// const asistente  = document.getElementById("asistente")

// const fawhatsapp= document.querySelector(".fa-whatsapp")

// setTimeout(() => {
//     fawhatsapp.classList.remove("fa-beat")
// }, 4000);
const whatsapp = document.getElementById("whatsapp")
const chatcontainer = document.getElementById("chat-container")
whatsapp.addEventListener("click",function(){

    if (chatcontainer.style.display === "none") {
        chatcontainer.style.display = "inline"   
        whatsapp.style.display = "none"
       } else {
        chatcontainer.style.display = "none"
       } 
   
    
    });

 
document.addEventListener('DOMContentLoaded', function () {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        appendUserMessage(userMessage);
        userInput.value = '';
        setTimeout(function () {
            appendBotMessage(getBotResponse(userMessage));
        }, 500);
    });

    function appendUserMessage(message) {
        const userMessageElement = document.createElement('div');
        userMessageElement.textContent = message;
        userMessageElement.classList.add('user-message');
        chatLog.appendChild(userMessageElement);
    }

    function appendBotMessage(message) {
        const botMessageElement = document.createElement('div');
        botMessageElement.textContent = message;
        botMessageElement.classList.add('chat-bot-message');
        chatLog.appendChild(botMessageElement);
    }

    function getBotResponse(userMessage) {
        // Aquí puedes agregar lógica para las respuestas del chatbot.
        // Por ahora, solo responderemos a saludos.ç
       
        if (userMessage.toLowerCase().includes('hola')) {
            return '¡Hola! ¿En qué puedo ayudarte?';
                } 
         else if (userMessage.toLowerCase().includes('informacion')){
            return '  ¿que tipo de informacion requieres?';    
         } 
        else if (userMessage.toLowerCase().includes('afrodecendiente')){
            return ' Nos podrias indicar a que grupo perteneces';    
        } 
            else if (userMessage.toLowerCase().includes('etnico')){
            return ' Desde que pais se comunica';
                        
        }
        else if (userMessage.toLowerCase().includes('Raizal')){
            return ' rrraaaaaa';
                        
        }
        else if (userMessage.toLowerCase().includes('Palenquero')){
            return ' qeeeeeee';
                        
        }
        else if (userMessage.toLowerCase().includes('ayuda')){
            
            return ` ¿Quiere comunicarse con un accesor? `;
         } 
         else if (userMessage.toLowerCase().includes('si')){
            
            return ' En un minuto nuestro accesor lo atendera '; 
         } 
         else if (userMessage.toLowerCase().includes('hasta luego')){
            
            return ' Fue un praser ayudarte '; 
         } 
         else if (userMessage.toLowerCase().includes('como esta')){
            
            return ' my bien y tu '; 
         } 
    
      else {
            return 'Lo siento, no entiendo ese mensaje.';
        }
    }
});


