//DoM Manupulation



//Traverse the DOM




//Parent Node Traversal

let ul =document.querySelector('ul');
console.log(ul);
/*
parentNode:
    * The parentNode property returns the parent node of the specified node, including elements, text nodes, and comment nodes.
    * It's a generic property that gives you the immediate parent node, regardless of its type.
*/
console.log(ul.parentNode); // outputs=> div.container
console.log(ul.parentNode.parentNode); //outputs=> body
/*
parentElement:
    * The parentElement property returns the parent element of the specified element.
    * Unlike parentNode, parentElement specifically refers to an HTML element node. 
    * It returns null if the parent node is not an element. 
*/
console.log(ul.parentElement); //outputs=> div.container
console.log(ul.parentElement.parentElement); //outputs=> body

//Child Node Traversal

console.log(ul.childNodes); //outputs=> NodeList(9) [#text, li.list-items, #text, li.list-items, #text, li.list-items, #text, li.list-items, #text] 
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor='blue';

console.log(ul.firstElementChild);

//Sibling Node Traversal

const div =document.querySelector('div');
console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.previousElementSibling); //outputs => h1.main-heading
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);//outouts=>h1.main-heading2