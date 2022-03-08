let hamburger = document.querySelector(".nav-hamburger");
let close_icon = document.querySelector(".nav-close-icon"); 
let primary_nav = document.querySelector(".primary-nav-items");

const hamFunction = () => {
    let hamVisible = hamburger.getAttribute("ham_visible");
    if (hamVisible === "true") {
        hamburger.setAttribute("ham_visible", "false");
        primary_nav.setAttribute("expanded", "true");
        close_icon.setAttribute("close_visible", "true");

    }
}


const closeFunction = () => {
    closeVisible = close_icon.getAttribute("close_visible");
    if (closeVisible === "true") {
        hamburger.setAttribute("ham_visible", "true");
        primary_nav.setAttribute("expanded", "false");
        close_icon.setAttribute("close_visible", "false");
    }
}

hamburger.addEventListener("click", hamFunction);
close_icon.addEventListener("click", closeFunction);