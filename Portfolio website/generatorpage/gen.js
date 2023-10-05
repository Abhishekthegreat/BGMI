document.getElementById('start-button').addEventListener('click', function () {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const characterIdInput = document.getElementById('character-id');
    let width = 0;

    function updateProgress() {
        if (width >= 100) {
            clearInterval(interval);
            // Redirect to the desired URL after progress is complete
            window.location.href = '/orderdone/order.html'; // Replace with your desired URL
        } else {
            width += 1; // Increase the step size for slower progress
            progressBar.style.width = width + '%';
            progressText.textContent = width + '%';
        }
    }

    const interval = setInterval(updateProgress, 500); // Increase the interval time (e.g., 50ms for slower progress)
});




