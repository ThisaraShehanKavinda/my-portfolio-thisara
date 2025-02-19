/*=================== toggle style switcher ================*/ 
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switcher on scroll
window.addEventListener("scroll" , ()=>{
    if ( document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*=================== theme colors ================*/ 
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    });
}
/*=================== theme light and dark ================*/ 
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    
    // Save preference to localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener("load", () => {
    // Check saved preference
    const theme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
    if (theme === 'dark') {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});