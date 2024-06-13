
let chatcontainer=document.getElementById('chat-container');
let messageInput=document.getElementById('message-input');
let button=document.getElementById('send-button');

button.addEventListener("click", function addMessage()
{
    let newchat=document.createElement("p");
    newchat.innerHTML=messageInput.value;
    chatcontainer.appendChild(newchat);
    messageInput.value="";


});

// function addMessage()
// {
//     let para=document.createElement("p");
//     para.innerHTML="textContent";
     
//     let parent=document.getElementsByTagName('div')
//     parent[0].appendChild(para);
    
    
// }