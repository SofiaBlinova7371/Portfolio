document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll("img, video, .section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-animated");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    animatedElements.forEach(el => {
        // Initialize animation state
        el.classList.add("scroll-init");
        observer.observe(el);
    });
});