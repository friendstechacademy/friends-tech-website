// Navbar Scroll Effect

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    nav.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );
});


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter,20);

        }else{
            counter.innerText = target;
        }
    };

    updateCounter();

});


// Scroll Reveal

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop <
           windowHeight - revealPoint){

            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// Smooth Button Animation

document.querySelectorAll("a[href^='#']")
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        document.querySelector(
        this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});
