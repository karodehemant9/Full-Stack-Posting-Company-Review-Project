const companyNameInput = document.getElementById("company-name");
const getReviewsButton = document.getElementById("get-reviews-button");
const reviewsList = document.getElementById("reviews-list");
const goToMainPageButton = document.getElementById("go-to-main-page-button");
const companyNameElement = document.getElementById("companyName");
const avgRatingElement = document.getElementById("avgRating");

getReviewsButton.addEventListener("click", function () {
    const companyName = document.getElementById("company-name").value;
    getReviews(companyName);

});

goToMainPageButton.addEventListener("click", function () {
    // Set the URL of the destination page
    const destinationURL = "FrontPage.html";
    // Redirect to the destination page
    window.location.href = destinationURL;
});



//Load existing reviews from server
let reviews;
let companyName;
let avgRating;

function getReviews(company) {
    let storedReviews = axios.get(`http://localhost:8000/review/get-reviews/${company}`);
    storedReviews
        .then((response) => {
            if (response.data !== 'No data found') {
                reviews = [...response.data.reviews] || [];
                console.log(response.data.reviews);
                companyName = response.data.companyName;
                avgRating = response.data.avgRating;

                // Display reviews
                displayReviews();
            }
            else {
                reviewsList.innerHTML = "";
                companyNameElement.innerHTML = "";
                avgRatingElement.innerHTML = "";
            }
        })
        .catch((error) => console.log(error));
}


// Function to display the submitted details
function displayReviews() {
    // Clear previous reviews (if any)
    reviewsList.innerHTML = "";
    companyNameElement.innerHTML = `<h3>Company Name:  ${companyName}</h3>`;
    avgRatingElement.innerHTML = `<h3>Average Rating:  ${avgRating}</h3>`;

    // Populate the reviews
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement("div");
        reviewElement.className = "review";
        reviewElement.innerHTML = `
            <h5>Review ${index + 1}</h5>
            <p><strong>Pros:</strong> ${review.pros}</p>
            <p><strong>Cons:</strong> ${review.cons}</p>
            <p><strong>Rating:</strong> ${review.rating}</p>
            <hr>
        `;
        reviewsList.appendChild(reviewElement);
    });
}
