document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter_options a");
    const cards = document.querySelectorAll(".card");
    const scrollTrigger = document.querySelector(".scroll-to-filter");
    const filterSection = document.querySelector(".filter");

    function setActiveFilter(filter) {
        // Remove active state from all
        filterLinks.forEach(link => link.classList.remove("active"));

        // Add active state to the clicked one
        document.querySelector(`.filter_options a.${filter}`)?.classList.add("active");

        // Show/hide cards
        cards.forEach(card => {
            if (filter === "featured") {
                card.style.display = card.classList.contains("featured") ? "flex" : "none";
            } else {
                card.style.display = card.classList.contains(filter) ? "flex" : "none";
            }
        });
    }

    // Initial: show featured
    setActiveFilter("featured");

    // Handle filter clicks
    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const classList = Array.from(link.classList);
            const filter = classList.find(cls => cls !== "active"); // ignore "active"
            if (filter) setActiveFilter(filter);
        });
    });

    // Smooth scroll on "Projects" heading click
    scrollTrigger?.addEventListener("click", (e) => {
        e.preventDefault();
        filterSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});