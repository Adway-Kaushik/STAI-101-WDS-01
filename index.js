const marquee = document.getElementById('mymarquee');

marquee.addEventListener('mouseenter', () => {
    marquee.stop(); // Pause the marquee on hover
});

marquee.addEventListener('mouseleave', () => {
    marquee.start(); // Resume the marquee when the cursor leaves
});