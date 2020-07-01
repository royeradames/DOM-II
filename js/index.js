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
//stop propagation with content destination
bodyH2.forEach(item => {
    item.addEventListener('click', (event) =>{
        event.target.style.fontSize = '5.2rem';
        event.stopPropagation();
    })
})

// normal size when h2 are double click
//stop propagation with content destination
bodyH2.forEach(item => {
    item.addEventListener('dblclick', (event) =>{
        event.target.style.fontSize = '3.2rem';
        event.stopPropagation();
    })
})

// //add a message saying that the page is loaded
// window.addEventListener('load', (event) => {
//     alert('page is fully loaded');
//   });

//adding a key shotcuts to the menu
//prevent navigation refresh
const navLinksArr = [];

    //add logo link to array
const logoHeading = document.querySelector('.logo-heading');
navLinksArr.push(logoHeading.href);

    //add nav links to array
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(item =>{
    navLinksArr.push(item.href);
})
window.addEventListener('keydown', (event) => {
    
    if(event['key'] === '0'){
        window.location.href = navLinksArr[0];
        event.preventDefault();
    }
    else if(event['key'] === '1'){
        window.location.href = navLinksArr[1];
        event.preventDefault();
    }
    else if(event['key'] === '2'){
        window.location.href = navLinksArr[2];
        event.preventDefault();
    }
    else if(event['key'] === '3'){
        window.location.href = navLinksArr[3];
        event.preventDefault();
    }
    else if(event['key'] === '4'){
        window.location.href = navLinksArr[4];
        event.preventDefault();
    }
});

//hover on paragraph to make them 2x bigger
const bodyP = document.querySelectorAll('p');
bodyP.forEach(item =>{
    item.addEventListener('mouseover', (event)=>{
        event.target.style.transition = '1.5s';
        event.target.style.fontSize = '2.6rem';
        
    })
    item.addEventListener('mouseleave', (event)=>{
        event.target.style.fontSize = '1.6rem';
    })
})


//6/10 scrooll to make image bigger or smaller. Min scale .125, Max scale 4
const images = document.querySelectorAll('img');
images.forEach(item =>{
    let scale = 1;
    item.addEventListener('wheel', (event) =>{
        
        //adjust scale with the scrolling wheel
        scale += event.deltaY * -0.01;

        //Restrict scale
        scale = Math.min(Math.max(.125,scale), 4);

        //apply scale transfrom
        event.target.style.transform = `scale(${scale})`;
        event.target.style.transition = '1s';
    })
})

//7/10 drag and drop home link to to 'fun bus' h1 to change it's text. Can only be done 1
const homeLink = navLinks[0];
const bodyH1 = document.querySelector('h1');
let dragged;
let oneTimeOnly = 0;
//fire at draggable home link
homeLink.addEventListener('drag', (event)=>{
    
}, false)

homeLink.addEventListener('dragstart', (event) =>{
    //store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
})

homeLink.addEventListener('dragover', (event) =>{
    // reset the transparency
    event.target.style.opacity = '';
})


//fire at dropable bodyh1
bodyH1.addEventListener('dragover', (event) =>{
    event.preventDefault();
})
bodyH1.addEventListener('drop', (event)=>{
    if(oneTimeOnly === 0){
        event.target.textContent += ` is ${bodyH1.textContent}`;
        oneTimeOnly++;
    }
})

//11/10 unique event listeners
//prevent propagation
const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('click',(event)=>{
    event.target.style.textAlign = 'center';
    
})