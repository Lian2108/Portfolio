const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.onclick = () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    };
});