document.addEventListener("DOMContentLoaded", () => {
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "aboutOverlayContainer";
    document.body.appendChild(overlayContainer);

    const darkOverlay = document.createElement("div");
    darkOverlay.id = "darkOverlay";
    Object.assign(darkOverlay.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 10,
        opacity: 0,
        pointerEvents: "none",
        transition: "opacity 0.7s ease"
    });
    document.body.appendChild(darkOverlay);

    // Dynamically load about.css once
    function loadAboutCSS() {
        if (!document.getElementById("aboutCSS")) {
            const link = document.createElement("link");
            link.id = "aboutCSS";
            link.rel = "stylesheet";
            link.href = "about.css";
            document.head.appendChild(link);
        }
    }

    // Fetch and inject about.html
    fetch("about.html")
        .then(response => response.text())
        .then(html => {
            overlayContainer.innerHTML = html;
            loadAboutCSS(); // Ensure CSS is injected only once

            const aboutMenu = overlayContainer.querySelector(".about");
            Object.assign(aboutMenu.style, {
                position: "fixed",
                top: "0",
                right: "-40vw",
                width: "30vw",
                height: "100vh",
                zIndex: 20,
                transition: "right 0.7s ease"
            });

            const headerMenu = document.querySelector(".header .menu");
            const closeMenu = aboutMenu.querySelector(".menu");

            function openAbout() {
                aboutMenu.style.right = "0";
                darkOverlay.style.opacity = "1";
                darkOverlay.style.pointerEvents = "auto";
            }

            function closeAbout() {
                aboutMenu.style.right = "-40vw";
                darkOverlay.style.opacity = "0";
                darkOverlay.style.pointerEvents = "none";
            }

            headerMenu.addEventListener("click", openAbout);
            closeMenu.addEventListener("click", closeAbout);
            darkOverlay.addEventListener("click", closeAbout);
        });
});