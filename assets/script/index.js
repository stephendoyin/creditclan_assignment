console.log("js is working");

let footerTabBtn = document.querySelectorAll(".footer-tab__btn"),
switchOnBtn = document.querySelector(".switch-js-on"),
switchOffBtn = document.querySelector(".switch-js-off"),
switchLink = document.querySelector(".navigation__btn--js");



footerTabBtn.forEach(function (item) {
    item.addEventListener("click", function(e){
        e.preventDefault();
        footerTabBtn.forEach(function (link) {
            link.classList.remove("footer-tab__btn--active");
        })
        item.classList.add("footer-tab__btn--active");
    })
});


switchLink.addEventListener("click", function (e) {
    e.preventDefault();
    switchOnBtn.classList.toggle("switch-js-off--hide");
    switchOffBtn.classList.toggle("switch-js-off--hide");
});