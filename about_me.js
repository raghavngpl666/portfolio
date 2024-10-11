window.onload = function() {
    const pointerShape = document.createElement('div');
    pointerShape.classList.add('pointer-shape'); // Add class for styling
    document.body.appendChild(pointerShape);

    // Function to track the mouse position
    document.addEventListener('mousemove', (event) => {
        // Get the mouse position relative to the window
        const mouseX = event.clientX; // Mouse position X
        const mouseY = event.clientY; // Mouse position Y

        // Log mouse coordinates to console
        console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);

        // Update the position of the pointer shape
        pointerShape.style.transform = `translate(${mouseX - pointerShape.offsetWidth / 2}px, ${mouseY - pointerShape.offsetHeight / 2}px)`;
    });
};
