// JavaScript functionality can be added here to handle button actions
const addReviewButton = document.getElementById("add-review-button");
const displayReviewsButton = document.getElementById("display-reviews-button");

// Example event listeners for button actions
addReviewButton.addEventListener("click", function () {
    // You can navigate to the page for adding a review or open a form here
    // Set the URL of the destination page
    const destinationURL = "PostReview.html";

    // Redirect to the destination page
    window.location.href = destinationURL;
});

displayReviewsButton.addEventListener("click", function () {
    // You can navigate to the page for displaying reviews or show reviews here
    // Set the URL of the destination page
    const destinationURL = "DisplayReview.html";

    // Redirect to the destination page
    window.location.href = destinationURL;
});