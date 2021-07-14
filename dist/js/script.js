const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    menuClose = document.querySelector(".menu__close"),
    overlay = document.querySelector(".menu__overlay"),
    menuLinks = document.querySelectorAll(".menu__link"),
    skillsCounters = document.querySelectorAll(".using__skills-percent"),
    slillsBars = document.querySelectorAll(".bar__fill");

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

menuLinks.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "visible";
    });
});

skillsCounters.forEach((item, i) => {
    slillsBars[i].style.width = item.innerHTML;
});
