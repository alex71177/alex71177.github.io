// const sendchatbtn = document.querySelector(".chat-input span");
// const chatinput = document.querySelector(".chat-input textarea")
// const  chatbox = document.querySelector(".chat-input span")
// let userMessage;
// const API_KEY=""
// const createchatli = (menssage,className)=>{
//     const chatli = document.createElement("li");
//     chatli.classList.add("chat",className);
//     let chatcontect = className === "outgoing"?  ` <p>${menssage}</p> `:`<span class="material-symbols-outlined">smart_toy</span><p>${menssage}</p>`
// chatli.innerHTML=chatcontect;
// return chatli;
// }

// const genetayersponse= ()=>{
//     const api_url = "https://api.openai.com/v1/chat/completions"
//     const requestOptions = {
//         method:"POST",
//         Headers:{
//             "Content-type":"applition/json",
//             "authorization":`bearer${api_KEY} `
//         },
//         body:JSON.stringify({
// modelo:"gpt-3.5-turbo",
// menssages:[{role:"user",content: userMessage}]
//         })
//     }
// }

// const handlechat = () =>{
// userMessage= chatinput.value.trim();
// if(!userMessage)return;
// chatbox.appendChild(createchatli(userMessage,"outgoing"))
// }
// sendchatbtn.addEventListener("click",handlechat);
