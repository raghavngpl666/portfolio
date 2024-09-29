// raghavngpl2js.js

window.onload = function() {
    // Dynamic footer year
    const footer = document.querySelector('#year');
    const year = new Date().getFullYear();
    footer.innerHTML = year;

    // Open links in new tabs when clicked
    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://example.com/about', '_blank'); // Update with actual URL
    });

    document.getElementById('projects-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://example.com/projects', '_blank'); // Update with actual URL
    });

    // Image cycling
    const images = [
        'website assets/asset6.png',
        'website assets/assets1.png',
        'website assets/assets2.png',
        'website assets/assets3.png',
        'website assets/assets4.png',
        'website assets/assets5.png'
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('name-image');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        imgElement.src = images[currentIndex];
    }, 500); // Change every 500 milliseconds (0.5 seconds)
};
