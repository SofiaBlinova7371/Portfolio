document.addEventListener("DOMContentLoaded", function () {
    const footerElement = document.createElement('div');
    footerElement.classList.add('footer');
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            footerElement.innerHTML = data;
            document.body.appendChild(footerElement);

            const footerStyle = document.createElement('link');
            footerStyle.rel = 'stylesheet';
            footerStyle.href = 'style.css';
            document.head.appendChild(footerStyle);

            // 🔁 Rebind cursor events after footer loads
            if (window.applyCustomCursor) {
                window.applyCustomCursor();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});