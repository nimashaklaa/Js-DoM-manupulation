const button = document.getElementById("myButton");
const paragraph = document.getElementById("myPara");

paragraph.style.backgroundColor ="#ff0000";

//Event Listener
button.addEventListener("click",()=>{
    
   paragraph.classList.toggle("hidden");
})
//paragraph.style.display ="none";
