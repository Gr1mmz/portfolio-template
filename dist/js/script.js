const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    menuClose = document.querySelector(".menu__close"),
    overlay = document.querySelector(".menu__overlay"),
    menuLink = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
});

menuLink.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
