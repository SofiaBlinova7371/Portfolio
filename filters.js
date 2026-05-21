// document.addEventListener("DOMContentLoaded", () => {
//   const filterLinks = document.querySelectorAll(".filter_options a");
//   const dropdown = document.getElementById("filterDropdown");
//   const cards = document.querySelectorAll(".card");
//   const motionPlaceholder = document.getElementById("motion-placeholder");
//   let motionBlockLoaded = false;

//   function setActiveFilter(category) {
//     // Highlight desktop links
//     filterLinks.forEach(link => {
//       link.classList.toggle("active", link.classList.contains(category));
//     });

//     // Sync dropdown (mobile)
//     if (dropdown) dropdown.value = category;

//     // Hide all project cards by default
//     cards.forEach(card => {
//       const matches = card.classList.contains(category);
//       card.style.display = matches ? "flex" : "none";
//     });

//     // Handle motion block
//     if (category === "motion_graphics") {
//       cards.forEach(card => (card.style.display = "none"));
//       if (!motionBlockLoaded) {
//         fetch("motion.html")
//           .then(res => res.text())
//           .then(html => {
//             motionPlaceholder.innerHTML = html;
//             motionBlockLoaded = true;
//             if (window.applyCustomCursor) window.applyCustomCursor();
//           })
//           .catch(err => console.error("Failed to load motion block:", err));
//       }
//       motionPlaceholder.style.display = "block";
//     } else {
//       motionPlaceholder.style.display = "none";
//     }
//   }

//   // Handle clicks on desktop links
//   filterLinks.forEach(link => {
//     link.addEventListener("click", e => {
//       e.preventDefault();
//       const category = [...link.classList].find(c => c !== "active");
//       if (category) setActiveFilter(category);
//     });
//   });

//   // Handle mobile dropdown
//   if (dropdown) {
//     dropdown.addEventListener("change", e => {
//       setActiveFilter(e.target.value);
//     });
//   }

//   // Default: show "featured"
//   setActiveFilter("featured");
// });


document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("filterDropdown");

  if (dropdown) {
    dropdown.addEventListener("change", e => {
      window.location.href = e.target.value;
    });
  }
});