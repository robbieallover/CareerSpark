// Assume you have an HTML element with id="jobForm" for your job creation form
const jobForm = document.getElementById('jobForm');

// Add an event listener to the form for handling job creation
jobForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(jobForm);

    // Make an AJAX request to the server to handle job creation
    fetch('/create_job', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        // Handle the response data as needed
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
