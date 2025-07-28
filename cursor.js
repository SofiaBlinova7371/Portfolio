function applyCustomCursor() {
    const cursor = document.getElementById("custom-cursor");

    if (!cursor) return;

    // Move cursor
    document.addEventListener("mousemove", e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Bind enlargement on interactive elements
    const enlargeTriggers = document.querySelectorAll(
        "a, button, .menu, .card, .cursor-enlarge, .hero_block, .scroll-to-filter, .back, img, video"
    );

    enlargeTriggers.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor--large");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor--large");
        });
    });
}

// Run initially
document.addEventListener("DOMContentLoaded", applyCustomCursor);

// Export to be reused after dynamic content loads
window.applyCustomCursor = applyCustomCursor;