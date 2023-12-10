// Assume you have a button with id "loadMoreBtn" and a container with id "contentContainer"
const loadMoreBtn = document.getElementById('loadMoreBtn');
const contentContainer = document.getElementById('contentContainer');

loadMoreBtn.addEventListener('click', function() {
    // Make an AJAX request to load more content
    fetch('/load_more', {
        method: 'GET',
    })
    .then(response => response.text())
    .then(data => {
        // Append the loaded content to the container
        contentContainer.innerHTML += data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
