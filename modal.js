// Assume you have a button with id "openModalBtn" and a modal with id "myModal"
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
