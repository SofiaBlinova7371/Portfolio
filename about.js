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

    function loadAboutCSS() {
        if (!document.getElementById("aboutCSS")) {
            const link = document.createElement("link");
            link.id = "aboutCSS";
            link.rel = "stylesheet";
            link.href = "about.css";
            document.head.appendChild(link);
        }
    }

    fetch("about.html")
        .then(response => response.text())
        .then(html => {
            overlayContainer.innerHTML = html;
            loadAboutCSS();

            const aboutMenu = overlayContainer.querySelector(".about");
            const headerMenu = document.querySelector(".header .menu");
            const closeMenu = aboutMenu.querySelector(".menu_about");

            const isMobile = () => window.innerWidth <= 800;

            function applyMenuStyles() {
                Object.assign(aboutMenu.style, {
                    position: "fixed",
                    top: "0",
                    right: isMobile() ? "-100vw" : "-40vw",
                    width: isMobile() ? "100vw" : "30vw",
                    height: "100vh",
                    zIndex: 20,
                    overflowY: isMobile() ? "auto" : "hidden",
                    transition: "right 0.7s ease"
                });
            }

            applyMenuStyles();
            window.addEventListener("resize", applyMenuStyles);

            function openAbout() {
                aboutMenu.style.right = "0";
                darkOverlay.style.opacity = "1";
                darkOverlay.style.pointerEvents = isMobile() ? "none" : "auto";
            }

            function closeAbout() {
                aboutMenu.style.right = isMobile() ? "-100vw" : "-40vw";
                darkOverlay.style.opacity = "0";
                darkOverlay.style.pointerEvents = "none";
            }

            headerMenu.addEventListener("click", openAbout);
            closeMenu.addEventListener("click", closeAbout);

            // On desktop only, clicking outside closes
            if (!isMobile()) {
                darkOverlay.addEventListener("click", closeAbout);
            }
        });
});