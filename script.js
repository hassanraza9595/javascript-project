// DOM Manipulation

// GetElementByID

// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName
// it returns array like element
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// getElementsByTagName
// it return li elements
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// querySelector
/* The querySelector() method returns the first element
   that matches a CSS selector. */

// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll

/* The querySelectorAll() method returns 
    all elements that matches a CSS selector(s).*/

// const container = document.querySelectorAll('div');

// console.log(container);


// DOM Manipulation

// styling html elements using javascript

// targeting h1 element using id
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// targeting list-item using class name

// const listItems = document.querySelectorAll('.list-items');

// for(i = 0; i< listItems.length; i++){
//     listItems[i].style.fontSize = '1rem';
// }

// console.log(listItems.length);


// Creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li')

// Adding Element
// ul.append(li);

// Modify Element

// li.innerText = 'x-men';

// Modifying Attributes & Classes

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// getting id 

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))

// add class 
// li.classList.add('list-items');
// remove class
// li.classList.remove('list-items');

// checking element wheather it has className or Not.
// console.log(li.classList.contains('list-items'));

// remove elements 
// li.remove();


// Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode.parentNode.parentNode);

// console.log(ul.parentElement.parentElement);

// Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'red';

// console.log(ul.children);

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Siblings Node Traversal

// let ul = document.querySelector('ul');
// let div = document.querySelector('div');

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// console.log(div.childNodes);

/* ============= Event Listeners ============== */

// Event listeners
// click
// const buttonTwo = document.querySelector('.btn-2');

// buttonTwo.addEventListener('click', alertBtn);


// function alertBtn() {
//    alert('I also love JavaScript');
// }

// mouseover

// const ul = document.querySelectorAll('.list-item');

// ul[2].addEventListener('mouseover', mouseOver);

// function mouseOver() {
//    ul[2].style.backgroundColor = 'blue';
// }


// Reveal Event

// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent() { 

//    if(hiddenContent.classList.contains('reveal-btn')){
//       hiddenContent.classList.remove('reveal-btn');
//    } else{
//       hiddenContent.classList.add('reveal-btn');
//    }
// }

// revealBtn.addEventListener('click', revealContent);


// Event Probagation

/* 3 Phase
   1. Event Capturing
   2. Target
   3. Event Bubbling  */


// window.addEventListener("click", function(){
//    console.log('Window');
// }, true);

// document.addEventListener("click", function(){
//    console.log('Document');
// }, true);

// document.querySelector('.div2').addEventListener(
//    "click", function(){
//       // e.stopPropagation();
//       console.log('Div2')
//    }, {once:true});

// document.querySelector('.div1').addEventListener(
//       "click", function(){
//          console.log('Div1')
//       }, true);

// document.querySelector('button').addEventListener(
//       "click", function(e){
//       console.log(e.target.innerText = 'cliked')
//      }, true);


// Event Delegation

// It allows users to append a single event listener 
// to a parent element thats adds it to all of its 
// parent AND future descendants that match a selector.

// document.querySelector('#football').addEventListener(
//    'click', function(e) {
//       console.log('Football is clicked');

//       const target = e.target;

//       if(target.matches('li')) {
//          target.style.backgroundColor = 'green';
//       }
//    }
// )

// document.querySelector('#basketball').addEventListener(
//    'click', function(e) {
//       console.log('Basketball is clicked');

//       const target = e.target;

//       if(target.matches('li')) {
//          target.style.backgroundColor = 'green';
//       }
//    }
// )

// document.querySelector('#boxing').addEventListener(
//    'click', function(e) {
//       console.log('boxing is clicked');

//       const target = e.target;

//       if(target.matches('li')) {
//          target.style.backgroundColor = 'green';
//       }
//    }
// )

// document.querySelector('#tennis').addEventListener(
//    'click', function(e) {
//       console.log('tennis is clicked');

//       const target = e.target;

//       if(target.matches('li')) {
//          target.style.backgroundColor = 'green';
//       }
//    }
// )

// document.querySelector('#golf').addEventListener(
//    'click', function(e) {
//       console.log('golf is clicked');

//       const target = e.target;

//       if(target.matches('li')) {
//          target.style.backgroundColor = 'green';
//       }
//    }
// )

// document.querySelector('#sports').addEventListener
// ('click', function(e) {
//    console.log(e.target.getAttribute('id') + ' is clicked');

//    const target = e.target;
//    if(target.matches('li')){
//       target.style.backgroundColor = 'green';
//    }
// })

// const sports = document.querySelector('#sports');
// const newSports = document.createElement('li');

// newSports.innerText = 'cricket';
// newSports.setAttribute('id', 'cricket');

// sports.appendChild(newSports);


// ================================= Part 2 ================================= //

// Variables

// let btn = document.querySelector('#new-quote');
// let quotation = document.querySelector('.quote');
// let person = document.querySelector('.person');

// Quotations

// const quotes = [{
//    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
//    person: ` Mahatma Gandhi`
// }, {
//    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
//    person: ` Albert Einstein`
// }, {
//    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
//    person: `Aristotle`
// }, {
//    quote: `"Your time is limited, so dont waste it living someone else's life."`,
//    person: ` Steve Jobs`
// }, {
//    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
//    person: ` Benjamin Franklin`
// }, {
//    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
//    person: `Oprah Winfrey`
// }, {
//    quote: `"t does not matter how slowly you go as long as you do not stop."`,
//    person: `Confucius`
// }, {
//    quote: `"Our lives begin to end the day we become silent about things that matter."`,
//    person: `Martin Luther King, Jr.`
// }, {
//    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
//    person: `Dalai Lama`
// }, {
//    quote: `"The journey of a thousand miles begins with one step."`,
//    person: `Lao Tzu`
// }, ];


// btn.addEventListener('click', function(){

//    let random = Math.floor(Math.random() * quotes.length);
   
//    quotation.innerText = quotes[random].quote;
//    person.innerText = quotes[random].person;

//    console.log(quotes[random].person)
// })



// Project 2 


/* Key Concepts for Project

   document.getElementByID();
   addEventListener();
   e.target
   CSS Styling Through JavaScript
   CSS Animation

*/

let btn = document.getElementById('open-btn');
let modal = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

btn.addEventListener('click', function(){
   
   modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {

   modal.style.display = 'none';
})

window.addEventListener('click', function(e){

   if(e.target === modal){
     modal.style.display = 'none';
   }
})

