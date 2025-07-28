document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("page-wrapper");

  // Initial entry animation
  wrapper.classList.add("page-enter");
  requestAnimationFrame(() => {
    wrapper.classList.add("page-enter-active");
  });

  document.body.addEventListener("click", async (e) => {
    const link = e.target.closest("a");

    if (
      !link ||
      link.getAttribute("target") === "_blank" ||
      link.href.includes("#") ||
      link.hostname !== location.hostname
    ) {
      return;
    }

    e.preventDefault();

    // Start fading out current content
    wrapper.classList.remove("page-enter", "page-enter-active");
    wrapper.classList.add("page-exit");

    // Fetch new content while animating out
    const response = await fetch(link.href);
    const htmlText = await response.text();

    // Get the new content's #page-wrapper content
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(htmlText, "text/html");
    const newContent = newDoc.getElementById("page-wrapper").innerHTML;

    // Wait for exit animation to end
    setTimeout(() => {
      // Replace content and animate in
      wrapper.innerHTML = newContent;
      wrapper.classList.remove("page-exit");
      wrapper.classList.add("page-enter");

      requestAnimationFrame(() => {
        wrapper.classList.add("page-enter-active");
      });

      // Reinitialize scripts if needed (cursor, header, etc.)
      if (typeof initCursor === "function") initCursor();
      if (typeof initMenu === "function") initMenu();
    }, 600); // match your exit animation time
  });
});