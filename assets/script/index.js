console.log("js is working");

let footerTabBtn = document.querySelectorAll(".footer-tab__btn");



footerTabBtn.forEach(function (item) {
    item.addEventListener("click", function(e){
        e.preventDefault();
        footerTabBtn.forEach(function (link) {
            link.classList.remove("footer-tab__btn--active");
        })
        item.classList.add("footer-tab__btn--active");
    })
});