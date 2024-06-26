document.addEventListener("DOMContentLoaded", function() {
    
// EC's title and image animations and changes

    //school clubs
    const nhslogo = document.getElementById("nhslogo"); 
    const edslogo = document.getElementById("edslogo");
    const theaterlogo = document.getElementById("theaterlogo");
    const title = document.getElementById("school_clubsheader"); 
    const nhsd = document.getElementById("nhsdescription"); 
    const edsd = document.getElementById("edsdescription"); 
    const theaterd = document.getElementById("theaterdescription"); 

    //volunteering 
    const friscologo = document.getElementById("friscologo"); 
    const scilogo = document.getElementById("scilogo");
    const codelogo = document.getElementById("codelogo");
    const titlevolun = document.getElementById("volunteeringheader"); 
    const friscod = document.getElementById("friscodescription"); 
    const scid = document.getElementById("scitechdescription"); 
    const coded = document.getElementById("codedescription"); 

    //computer science
    const betterlogo = document.getElementById("betterlogo"); 
    const cslogo = document.getElementById("complogo");
    const titlecs = document.getElementById("compsciheader"); 
    const betterd = document.getElementById("betterdescription"); 
    const csd = document.getElementById("compdescription");
    
    //extra
    const xbtn = document.getElementById("x-button");
    const xbtn2 = document.getElementById("x-buttonvol"); 
    const xbtn3 = document.getElementById("x-buttoncs"); 
    var full = false; 

    //school clubs
    nhslogo.addEventListener('mouseover', NHStitlechange);
    nhslogo.addEventListener('mouseleave', resetheader);
    nhslogo.addEventListener('click', nhsfull);
    edslogo.addEventListener('mouseover', EDStitlechange);
    edslogo.addEventListener('mouseleave', resetheader);
    edslogo.addEventListener('click', edsfull);
    theaterlogo.addEventListener('mouseover', Theatertitlechange);
    theaterlogo.addEventListener('mouseleave', resetheader);
    theaterlogo.addEventListener('click', theaterfull);

     //volunteering 
     friscologo.addEventListener('mouseover', friscotitlechange);
     friscologo.addEventListener('mouseleave', resetheader);
     friscologo.addEventListener('click', friscofull);
     scilogo.addEventListener('mouseover', scititlechange);
     scilogo.addEventListener('mouseleave', resetheader);
     scilogo.addEventListener('click', scifull);
     codelogo.addEventListener('mouseover', codetitlechange);
     codelogo.addEventListener('mouseleave', resetheader);
     codelogo.addEventListener('click', codefull);

     //computer science 
     betterlogo.addEventListener('mouseover', bettertitlechange);
     betterlogo.addEventListener('mouseleave', resetheader);
     betterlogo.addEventListener('click', betterfull);
     cslogo.addEventListener('mouseover', cstitlechange);
     cslogo.addEventListener('mouseleave', resetheader);
     cslogo.addEventListener('click', csfull);
    
    //extra
    xbtn.addEventListener('mouseover', xbuttonchange);
    xbtn.addEventListener('mouseleave', xbuttonreset);
    xbtn.addEventListener('click', clickreset);
    xbtn2.addEventListener('mouseover', xbuttonchange);
    xbtn2.addEventListener('mouseleave', xbuttonreset);
    xbtn2.addEventListener('click', clickreset);
    xbtn3.addEventListener('mouseover', xbuttonchange);
    xbtn3.addEventListener('mouseleave', xbuttonreset);
    xbtn3.addEventListener('click', clickreset);
    // hover on logos

    //school clubs
    function NHStitlechange(){
        if(full) return;
        title.innerHTML = "School Clubs: NHS Officer";
        nhslogo.height = 400;
        nhslogo.width = 400;
        
    }
    function EDStitlechange(){
        if(full) return;
        title.innerHTML = "School Clubs: EDS Officer";
        edslogo.height = 400;
        edslogo.width = 400;
    }
    function Theatertitlechange(){
        if(full) return;
        title.innerHTML = "School Clubs: Drama Club and International Thespian Society Member ";
        theaterlogo.height = 400;
        theaterlogo.width = 400;
    }

    //volunteering 
    function friscotitlechange(){
        if(full) return;
        titlevolun.innerHTML = "Volunteering: VolunTEEN";
        friscologo.height = 400;
        friscologo.width = 400;
        
    }
    function scititlechange(){
        if(full) return;
        titlevolun.innerHTML = "Volunteering: Museum Floor Helper";
        scilogo.height = 400;
        scilogo.width = 400;
    }
    function codetitlechange(){
        if(full) return;
        titlevolun.innerHTML = "Volunteering: Sensei";
        codelogo.height = 400;
        codelogo.width = 400;
    }
    //computer science 
    function bettertitlechange(){
        if(full) return;
        titlecs.innerHTML = "Computer Science: For a Better Tomorrow Hackathon Creater, Mentor, and Judge";
        betterlogo.height = 400;
        betterlogo.width = 400;
    }
    function cstitlechange(){
        if(full) return;
        titlecs.innerHTML = "Computer Science: Programming Projects";
        cslogo.height = 400;
        cslogo.width = 400;
    }
   
    function resetheader(){
        if(full) return;
        title.innerHTML = "School Clubs";
        titlevolun.innerHTML = "Volunteering";
        titlecs.innerHTML = "Computer Science";
        
        nhslogo.height = 300;
        nhslogo.width = 300;
        edslogo.height = 300;
        edslogo.width = 300;
        theaterlogo.height = 300;
        theaterlogo.width = 300;

        friscologo.height = 300;
        friscologo.width = 300;
        scilogo.height = 300;
        scilogo.width = 300;
        codelogo.height = 300;
        codelogo.width = 300;

        cslogo.height = 300;
        cslogo.width = 300;
        betterlogo.height = 300;
        betterlogo.width = 300;
    }


    // click on logos

    //school clubs 
    function nhsfull(){
        if(full) return;
        full= true; 
        theaterlogo.height = 10;
        theaterlogo.width = 10;
        edslogo.height = 10;
        edslogo.width = 10;
        title.innerHTML = "School Clubs: NHS Officer";
        nhslogo.height = 400;
        nhslogo.width = 400;
        nhsd.style.display = 'flex';
        xbtn.height = 100; 
        xbtn.width = 100;
       
    }
    function edsfull(){
        if(full) return;
        full= true; 
        theaterlogo.height = 10;
        theaterlogo.width = 10;
        nhslogo.height = 10;
        nhslogo.width = 10;
        title.innerHTML = "School Clubs: EDS Officer";
        edslogo.height = 400;
        edslogo.width = 400;
        edsd.style.display = 'flex';
        xbtn.height = 100; 
        xbtn.width = 100;
    }
    function theaterfull(){
        if(full) return;
        full= true; 
        edslogo.height = 10;
        edslogo.width = 10;
        nhslogo.height = 10;
        nhslogo.width = 10;
        title.innerHTML = "School Clubs: Drama Club and International Thespian Society Member ";
        theaterlogo.height = 400;
        theaterlogo.width = 400;
        theaterd.style.display = 'flex';
        xbtn.height = 100; 
        xbtn.width = 100;
    }

    //volunteering
    function friscofull(){
        if(full) return;
        full= true; 
        codelogo.height = 10;
        codelogo.width = 10;
        scilogo.height = 10;
        scilogo.width = 10;
        titlevolun.innerHTML = "Volunteering: VolunTEEN";
        friscologo.height = 400;
        friscologo.width = 400;
        friscod.style.display = 'flex';
        xbtn2.height = 100; 
        xbtn2.width = 100;
       
    }
    function scifull(){
        if(full) return;
        full= true; 
        codelogo.height = 10;
        codelogo.width = 10;
        friscologo.height = 10;
        friscologo.width = 10;
        titlevolun.innerHTML = "Volunteering: Museum Floor Helper";
        scilogo.height = 400;
        scilogo.width = 400;
        scid.style.display = 'flex';
        xbtn2.height = 100; 
        xbtn2.width = 100;
    }
    function codefull(){
        if(full) return;
        full= true; 
        friscologo.height = 10;
        friscologo.width = 10;
        scilogo.height = 10;
        scilogo.width = 10;
        titlevolun.innerHTML = "Volunteering: Sensei";
        codelogo.height = 400;
        codelogo.width = 400;
        coded.style.display = 'flex';
        xbtn2.height = 100; 
        xbtn2.width = 100;
    }

    //Computer science 
    function betterfull(){
        if(full) return;
        full= true; 
        cslogo.height = 10;
        cslogo.width = 10;
        titlecs.innerHTML = "Computer Science: For a Better Tomorrow Hackathon Creater, Mentor, and Judge";
        betterlogo.height = 400;
        betterlogo.width = 400;
        betterd.style.display = 'flex';
        xbtn3.height = 100; 
        xbtn3.width = 100;
       
    }
    function csfull(){
        if(full) return;
        full= true; 
        betterlogo.height = 10;
        betterlogo.width = 10;
        titlecs.innerHTML = "Computer Science: Programming Projects";
        cslogo.height = 400;
        cslogo.width = 400;
        csd.style.display = 'flex';
        xbtn3.height = 100; 
        xbtn3.width = 100;
    }

    //Extra    
    function xbuttonchange(){
        xbtn.src = 'Images/x-buttongoogle.png';
    }
    function xbuttonreset(){
        xbtn.src = 'Images/x-buttongoogle.png';
    }
    function clickreset(){
       full=false;
       nhsd.style.display = 'none';
       edsd.style.display = 'none';
       theaterd.style.display = 'none';
       friscod.style.display = 'none';
       scid.style.display = 'none';
       coded.style.display = 'none';
       csd.style.display = 'none';
       betterd.style.display = 'none';
       xbtn.height = 1; 
       xbtn.width = 1;
       xbtn2.height = 1; 
       xbtn2.width = 1;
       xbtn3.height = 1; 
       xbtn3.width = 1;
       resetheader();

    }

});