document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.left a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            loadContent(href);
        });
    });
});

function loadContent(url) {
    const centerSection = document.querySelector('.center');
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            centerSection.innerHTML = xhr.responseText;
        } else {
            console.error('Error:', xhr.statusText);
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}
