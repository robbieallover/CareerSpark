// Assume you have navigation links with class "nav-link" and corresponding content divs with class "page-content"
const navLinks = document.querySelectorAll('.nav-link');
const contentDivs = document.querySelectorAll('.page-content');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Hide all content divs
        contentDivs.forEach(div => {
            div.style.display = 'none';
        });

        // Show the selected content div
        const targetDivId = this.getAttribute('data-target');
        const targetDiv = document.getElementById(targetDivId);
        if (targetDiv) {
            targetDiv.style.display = 'block';
        }
    });
});
