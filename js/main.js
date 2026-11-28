import "../css/style.css";

// button toggle for the responsive nav bar
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-toggle-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

if (!menuBtn || !mobileMenu) return;

function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle("opacity-0", !isOpen);
    mobileMenu.classList.toggle("pointer-events-none", !isOpen);
    hamburgerIcon?.classList.toggle("hidden", isOpen);
    closeIcon?.classList.toggle("hidden", !isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
}

menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });
});