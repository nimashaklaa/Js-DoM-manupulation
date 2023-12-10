//getElement by ID

let msg=document.getElementById("main-heading")
console.log(msg)

//get Elemnets by  classname
let listItems =document.getElementsByClassName("list-items")
console.log(listItems)

//get Element by tag name
const listItem =document.getElementsByTagName("ul")
console.log(listItem)

const container =document.querySelector('div');
console.log(container);

// #main-heading is used for ID selector
// .main-heading is used for class selector 
// main-heading is used  for tag selector

const title= document.querySelector('.main-heading');
title.querySelector.color ='red';
title.style.color ='red'; // from this it can change the color of style
//console.log(title.style.color)
console.log(title.querySelector.color)

//change the font-size 
const list_items = document.querySelectorAll('.list-items');
for(i=0; i< list_items.length;i++){
    list_items[i].style.fontSize ='2rem';
    
}
console.log(list_items)

//creating Elements
const ul =document.querySelector('ul');
const li =document.createElement('li');
//adding elements
ul.append(li);
//modifying text
const firstListItem=document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);