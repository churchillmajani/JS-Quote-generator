let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person =  document.querySelector('.person');

const quotes = [{
    quote: "Every noble work is at first impossible.",
    person: "Thomas Carlyle"
},{
    quote: "Believe you can and you’re halfway there.",
    person: "Teddy Roosevelt"  
},{
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    person: "Dennis P. Kimbro"  
},{
    quote: "An obstacle is often a stepping stone.",
    person: "William Prescott"  
},{
    quote: "There is nothing impossible to they who will try.",
    person: "Alexander the Great"  
},{
    quote: "Whether you think you can or think you can’t, you’re right.",
    person: "Henry Ford"  
},{
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu"  
},{
    quote: "May your choices reflect your hopes, not your fears.",
    person: "Nelson Mandela"  
},{
    quote: "If it matters to you, you’ll find a way.",
    person: "Charlie Gilkey"  
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 
  
})