// document.addEventListener("DOMContentLoaded", function () {
//     const filterLinks = document.querySelectorAll(".filter_options a");
//     const cards = document.querySelectorAll(".card");
//     const scrollTrigger = document.querySelector(".scroll-to-filter");
//     const filterSection = document.querySelector(".filter");

//     function setActiveFilter(filter) {
//         // Remove active state from all
//         filterLinks.forEach(link => link.classList.remove("active"));

//         // Add active state to the clicked one
//         document.querySelector(`.filter_options a.${filter}`)?.classList.add("active");

//         // Show/hide cards
//         cards.forEach(card => {
//             if (filter === "featured") {
//                 card.style.display = card.classList.contains("featured") ? "flex" : "none";
//             } else {
//                 card.style.display = card.classList.contains(filter) ? "flex" : "none";
//             }
//         });
//     }

//     // Initial: show featured
//     setActiveFilter("featured");

//     // Handle filter clicks
//     filterLinks.forEach(link => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             const classList = Array.from(link.classList);
//             const filter = classList.find(cls => cls !== "active"); // ignore "active"
//             if (filter) setActiveFilter(filter);
//         });
//     });

//     // Smooth scroll on "Projects" heading click
//     scrollTrigger?.addEventListener("click", (e) => {
//         e.preventDefault();
//         filterSection.scrollIntoView({ behavior: "smooth", block: "start" });
//     });
// });


// filters.js

// Main filtering behavior
// Includes loading motion block and showing/hiding projects

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter_options a");
  const projectCards = document.querySelectorAll(".card");
  const motionPlaceholder = document.getElementById("motion-placeholder");

  function setActiveFilter(category) {
    filterButtons.forEach(button => {
      button.classList.toggle("active", button.classList.contains(category));
    });

    projectCards.forEach(card => {
      const cardCategories = card.className.split(" ");
      const show = category === "all" || cardCategories.includes(category);
      card.style.display = show ? "block" : "none";
    });

    // Special handling for motion filter
    if (category === "motion_graphics") {
      if (!motionPlaceholder.innerHTML.trim()) {
        fetch("motion.html")
          .then(res => res.text())
          .then(html => {
            motionPlaceholder.innerHTML = html;
            if (window.applyCustomCursor) window.applyCustomCursor();
          })
          .catch(err => console.error("Failed to load motion block:", err));
      }
      motionPlaceholder.style.display = "block";
    } else {
      motionPlaceholder.style.display = "none";
    }
  }

  // Attach event listeners
  filterButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const category = button.classList[0];
      setActiveFilter(category);
    });
  });

  // Default to "featured" filter on load
  setActiveFilter("featured");
});