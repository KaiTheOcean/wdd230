let date = new Date();
let year = date.getFullYear();
document.querySelector(".year").textContent = year;
document.querySelector(".lastUpdate").textContent = document.lastModified;

// const button = document.querySelector(".menu");
// const mainNav = document.querySelector(".navigation")

// button.addEventListener('click', () => {
//     mainNav.classList.toggle("responsive")
// }, false);

// window.onresize = () => {
//     if (window.innerWidth > 710) mainNav.classList.remove("responsive")
// }

function toggleMenu() {
    document.getElementById(".navigation").classList.toggle("open");
}

const x = document.getElementById("menu")
x.onclick = toggleMenu;

