
document.addEventListener("scroll",onScroll);
let navbar = document.getElementsByClassName("navbar")[0];
let repeat = document.querySelectorAll(".animate");

function onScroll(event)
{
    let scroll = document.documentElement.scrollTop;
    closeHamburgerMenu();
    if(scroll == 0)
    {
        navbar.classList.remove("dark-color");
        navbar.classList.remove("shadow");
        navbar.classList.add("top");
        repeat.forEach((val)=>{
            val.classList.remove('show');
        })
    }
    else
    {
        navbar.classList.remove("top");
        navbar.classList.add("dark-color");
        navbar.classList.add("shadow");
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    toggleHamburgerMenu();
    navbar.classList.remove("top");
    navbar.classList.add("dark-color");
    navbar.classList.add("shadow");
})
function toggleHamburgerMenu()
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navMenu.classList.toggle("shadow");
}
function closeHamburgerMenu()
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenu.classList.remove("shadow");
}