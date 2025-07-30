
// document.addEventListener("DOMContentLoaded", () => {
//   const filterButtons = document.querySelectorAll(".filter_options a");
//   const projectCards = document.querySelectorAll(".card");
//   const motionPlaceholder = document.getElementById("motion-placeholder");

//   function setActiveFilter(category) {
//     filterButtons.forEach(button => {
//       button.classList.toggle("active", button.classList.contains(category));
//     });

//     projectCards.forEach(card => {
//       const cardCategories = card.className.split(" ");
//       const show = category === "all" || cardCategories.includes(category);
//       card.style.display = show ? "block" : "none";
//     });

//     // Special handling for motion filter
//     if (category === "motion_graphics") {
//       if (!motionPlaceholder.innerHTML.trim()) {
//         fetch("motion.html")
//           .then(res => res.text())
//           .then(html => {
//             motionPlaceholder.innerHTML = html;
//             if (window.applyCustomCursor) window.applyCustomCursor();
//           })
//           .catch(err => console.error("Failed to load motion block:", err));
//       }
//       motionPlaceholder.style.display = "block";
//     } else {
//       motionPlaceholder.style.display = "none";
//     }
//   }

//   // Attach event listeners
//   filterButtons.forEach(button => {
//     button.addEventListener("click", event => {
//       event.preventDefault();
//       const category = button.classList[0];
//       setActiveFilter(category);
//     });
//   });

//   // Default to "featured" filter on load
//   setActiveFilter("featured");
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const filterLinks = document.querySelectorAll(".filter_options a");
//     const dropdown = document.getElementById("filterDropdown");
//     const allCards = document.querySelectorAll(".card");
//     const motionSection = document.querySelector(".motion_section");

//     function updateFilter(filter) {
//         filterLinks.forEach(link => {
//             if (link.classList.contains(filter)) {
//                 link.classList.add("active");
//             } else {
//                 link.classList.remove("active");
//             }
//         });

//         allCards.forEach(card => {
//             card.style.display = card.classList.contains(filter) ? "flex" : "none";
//         });

//         if (motionSection) {
//             motionSection.style.display = (filter === "motion_graphics") ? "block" : "none";
//         }
//     }

//     // Click-based filtering
//     filterLinks.forEach(link => {
//         link.addEventListener("click", e => {
//             e.preventDefault();
//             const filter = [...link.classList].find(c => c !== "active");
//             updateFilter(filter);
//             if (dropdown) dropdown.value = filter; // sync with dropdown
//         });
//     });

//     // Dropdown filtering
//     if (dropdown) {
//         dropdown.addEventListener("change", e => {
//             const filter = e.target.value;
//             updateFilter(filter);
//         });
//     }

//     // Default view
//     updateFilter("featured");
// });


document.addEventListener("DOMContentLoaded", () => {
  const filterLinks = document.querySelectorAll(".filter_options a");
  const dropdown = document.getElementById("filterDropdown");
  const cards = document.querySelectorAll(".card");
  const motionPlaceholder = document.getElementById("motion-placeholder");
  let motionBlockLoaded = false;

  function setActiveFilter(category) {
    // Highlight desktop links
    filterLinks.forEach(link => {
      link.classList.toggle("active", link.classList.contains(category));
    });

    // Sync dropdown (mobile)
    if (dropdown) dropdown.value = category;

    // Hide all project cards by default
    cards.forEach(card => {
      const matches = card.classList.contains(category);
      card.style.display = matches ? "flex" : "none";
    });

    // Handle motion block
    if (category === "motion_graphics") {
      cards.forEach(card => (card.style.display = "none"));
      if (!motionBlockLoaded) {
        fetch("motion.html")
          .then(res => res.text())
          .then(html => {
            motionPlaceholder.innerHTML = html;
            motionBlockLoaded = true;
            if (window.applyCustomCursor) window.applyCustomCursor();
          })
          .catch(err => console.error("Failed to load motion block:", err));
      }
      motionPlaceholder.style.display = "block";
    } else {
      motionPlaceholder.style.display = "none";
    }
  }

  // Handle clicks on desktop links
  filterLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const category = [...link.classList].find(c => c !== "active");
      if (category) setActiveFilter(category);
    });
  });

  // Handle mobile dropdown
  if (dropdown) {
    dropdown.addEventListener("change", e => {
      setActiveFilter(e.target.value);
    });
  }

  // Default: show "featured"
  setActiveFilter("featured");
});