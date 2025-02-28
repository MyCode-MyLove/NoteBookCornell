let url, new_url;
url = window.location.href;
new_url = url.split('?')[0];
window.history.pushState({}, document.title, new_url);

function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".toolbar a");

    // Mặc định chọn "Trang chủ" khi tải trang
    menuItems[0].classList.add("active");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Xóa active của tất cả menu
            menuItems.forEach(i => i.classList.remove("active"));
            // Thêm active cho mục được nhấn
            this.classList.add("active");
        });
    });
    const titles = document.querySelectorAll(".title-cornell");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Kích hoạt khi 30% phần tử xuất hiện

    titles.forEach((title) => observer.observe(title));
});

