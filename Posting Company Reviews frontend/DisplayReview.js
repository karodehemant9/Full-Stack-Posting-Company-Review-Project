const companyNameInput = document.getElementById("company-name");
const getReviewsButton = document.getElementById("get-reviews-button");
const reviewsList = document.getElementById("reviews-list");
const goToMainPageButton = document.getElementById("go-to-main-page-button");

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

function getReviews(companyName)
{
let storedReviews = axios.get(`http://localhost:8000/review/get-reviews/${companyName}`);
storedReviews
.then((response) => {
    reviews = [...response.data] || [];
    console.log(response);
    console.log(response.data);

    // Display reviews
    displayReviews();  
})
.catch((error) => console.log(error));
}


// Function to display the submitted details
function displayReviews() {
    const reviewsList = document.getElementById("reviews-list");

    // Clear previous reviews (if any)
    reviewsList.innerHTML = "";

    // Populate the reviews
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement("div");
        reviewElement.className = "review";
        reviewElement.innerHTML = `
            <h3>Review ${index + 1}</h3>
            <p><strong>Pros:</strong> ${review.pros}</p>
            <p><strong>Cons:</strong> ${review.cons}</p>
            <p><strong>Rating:</strong> ${review.rating}</p>
        `;
        reviewsList.appendChild(reviewElement);
    });
}
