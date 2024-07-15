document.addEventListener("DOMContentLoaded", function() {
// projects pages
    
const projects = [
    { src: 'Images/Callogo.jpeg', description: "A calculator that does basic arithmetic operations. Developed using Java and stdDraw" },
    { src: 'Images/lifelogo.jpeg', description: "Developed John Horton Conway’s Game of Life in Java as part of my Computer Science 3 project." },
    { src: 'Images/tetrislogo.jpeg', description: "The tetirs game made using STD Draw Java library." },
    { src: 'Images/soonlogo.jpeg', description: "I am working on more projects right now and more projects will be posted in the future" }
];

const back = document.getElementById("back");
const front = document.getElementById("forward");
const img = document.getElementById("projectimage");
const description = document.getElementById("description");
 //Nav bar
 const menu = document.getElementById("menuicon");
 const menuitems = document.getElementById("menuliksm");
 
 // Initialize the menu to be off-screen
 menuitems.style.top = '-150%';

 //click on menu 
 menu.addEventListener('click', menuClick);

 function menuClick() {
     console.log(menuitems.style.top);
     if (menuitems.style.top === '-150%') {
         menuitems.style.top = '10%';
     } else {
         menuitems.style.top = '-150%';
     }
     console.log(menuitems.style.top);
 }
back.addEventListener('click', goBack);
front.addEventListener('click', goFront);

function goBack() {
    console.log("here1");
    let curr = findCurrproject();
    if (curr <= 0) return;
    updateContent(curr - 1);
}

function goFront() {
    console.log("here3");
    let curr = findCurrproject();
    if (curr >= projects.length - 1) return;
    updateContent(curr + 1);
}

function findCurrproject() {
    console.log("here2");
    let imgSrc = img.src.split('/').pop();  // Extract the filename
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].src.includes(imgSrc)) {
            return i;
        }
    }
    return -1;
}

function updateContent(index) {
    img.src = projects[index].src;
    description.innerHTML = projects[index].description;
}

// Initialize the first project's content
updateContent(0);  // This will set the initial image and description to the third project (tetrislogo)

});
