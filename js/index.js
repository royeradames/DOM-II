// Your code goes here
/*
Task 2: Create Unique Event Listeners
 Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
 mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick
Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

 Nest two similar events somewhere in the site and prevent the event propagation properly
 Stop the navigation items from refreshing the page by using preventDefault()

*/
const bodyH2 = document.querySelectorAll('h2');
const bodyH4 = document.querySelectorAll('h4');

//click on the h2 to double their sizes
bodyH2.forEach(item => {
    item.addEventListener('click', (event) =>{
        event.target.style.fontSize = '5.2rem';
    })
})

// normal size when h2 are double click
bodyH2.forEach(item => {
    item.addEventListener('dblclick', (event) =>{
        event.target.style.fontSize = '3.2rem';
    })
})

//add a message saying that the page is loaded
window.addEventListener('load', (event) => {
    alar('page is fully loaded');
  });