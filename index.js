// javascript
const menuBtn = document.querySelector(".mobile-nav-toggle")
const nav = document.querySelector(".primary-navigation");

menuBtn.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visibility")
    if (visibility === "false") {
        nav.setAttribute("data-visibility", true)
    } else {
        nav.setAttribute("data-visibility", false)
    }
    console.log(visibility)
})