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
});
