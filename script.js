//Menu
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");

//Menu Function
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

//Scroll Function
window.onscroll = () => {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

//Active Navigation Link
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.onclick = () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    };
});