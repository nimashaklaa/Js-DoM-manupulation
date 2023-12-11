/* 
    * helps to add interactive elements in html by listening to differnt events 
    * load events
    * touch start 
    * key down events
    * mouse over events
    * dumb events

*/

//element.addEventListner("click",function);
document.addEventListener("DOMContentLoaded", function() {
    const buttonTwo = document.querySelector('.btn-2');

    function alertBtn() {
        alert('I also love JavaScript');
    }

    buttonTwo.addEventListener("click", alertBtn);

    //MouseOver

    const newBackgroundColor=document.querySelector('.box-3');

    function changeBgColor(){
        newBackgroundColor.style.backgroundColor='blue';
    }
    newBackgroundColor.addEventListener("mouseover",changeBgColor);


    //Reveal Event

    const revealBtn = document.querySelector('.reveal-btn');
    const hiddenContent =document.querySelector('.hidden-content');
    function revealContent(){
        /*if (hiddenContent.classList.contains('reveal-btn')){
            hiddenContent.classList.remove('reveal-btn');
        }else{
           hiddenContent.classList.add('reveal-btn'); 
        }*/
        hiddenContent.classList.toggle('.reveal-btn');
    }
    revealBtn.addEventListener("click",revealContent);


});
