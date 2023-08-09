/*-----===VARIABLES===-----*/
const header = document.getElementById("header");
//Initial scroll position
let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", headerPosition);

/*-----===FUNCTIONS===-----*/
function headerPosition() {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        header.style.top = "-15vh";
    } else {
        header.style.top = "0";
    }

    lastScrollPosition = currentScrollPosition;
}