const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('selected-rating');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        ratingInput.value = rating;
        updateRatingUI(rating);
    });
});

function updateRatingUI(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } 
        else {
            star.classList.remove('selected');
        }
    });
}

// Function to save review to server 
function saveReviewToServer(review) {
    axios.post("http://localhost:8000/review/add-review", review)
    .then((response) => {
        // Display the updated list
        location.reload();
        console.log(response);
    })
    .catch((error) => console.log(error));
}



// Function to add review to the list
function addReview(companyName, pros, cons, rating) {
    const newReview = {'companyName' : companyName, 'pros': pros, 'cons': cons, 'rating': rating};
    saveReviewToServer(newReview);
}


// Handle form submission
function handleUserSubmission(e) {
    e.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const pros = document.getElementById('pros').value;
    const cons = document.getElementById('cons').value;
    const rating = document.getElementById('selected-rating').value;

    if (companyName === null || pros === null || cons === null || rating === null) {
        alert('Please fill in all fields with valid data.');
    } else {
        // Add the user to the list
        
  console.log(companyName);
 
  console.log(pros);
  
  console.log(cons);
  
  console.log(rating);
        addReview(companyName, pros, cons, rating);
        // Reset the form
        e.target.reset();
        
    }
}

const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', handleUserSubmission);
