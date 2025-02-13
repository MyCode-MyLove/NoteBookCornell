let url, new_url;
url = window.location.href;
new_url = url.split('?')[0];
window.history.pushState({}, document.title, new_url);

function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".left a");
    var currentPath = window.location.pathname;

    if (currentPath === "/" || currentPath.endsWith("index.html")) {
        links[0].classList.add("active"); 
    }

    links.forEach(function (link) {
        if (link.href.includes(currentPath)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
