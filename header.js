document.addEventListener("DOMContentLoaded", function () {
    const headerElement = document.createElement('div');
    headerElement.classList.add('header');
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            footerElement.innerHTML = data;
            document.body.appendChild(headerElement);

            const footerStyle = document.createElement('link');
            footerStyle.rel = 'stylesheet';
            footerStyle.href = 'style.css';
            document.head.appendChild(headerStyle);
        })
        .catch(error => console.error('Error loading footer:', error));
});
