document.addEventListener("DOMContentLoaded", function() {
// projects pages
    
const projects = [
    { src: 'Images/Callogo.jpeg', description: "ekfgledf" },
    { src: 'Images/lifelogo.jpeg', description: "rfdjgjdjdjh" },
    { src: 'Images/tetrislogo.jpeg', description: "hsdgdsgh" },
    { src: 'Images/soonlogo.jpeg', description: "hkdgfkhdf" }
];

const back = document.getElementById("back");
const front = document.getElementById("forward");
const img = document.getElementById("projectimage");
const description = document.getElementById("description");

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
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].src === img.src) {
            return i;
        }
    }
    return -1;
}

function updateContent(index) {
    console.log(projects[index].src)
    img.src = projects[index].src;
    description.innerHTML = projects[index].description;
}

});
