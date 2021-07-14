const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    menuClose = document.querySelector(".menu__close"),
    overlay = document.querySelector(".menu__overlay"),
    menuLink = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "visible";
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "visible";
});

menuLink.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "visible";
    });
});
