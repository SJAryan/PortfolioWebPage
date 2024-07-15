document.addEventListener("DOMContentLoaded", function() {
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
            menuitems.style.top = '55%';
        } else {
            menuitems.style.top = '-150%';
        }
        console.log(menuitems.style.top);
    }
});
