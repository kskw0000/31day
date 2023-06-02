document.getElementById('submitReviewButton').addEventListener('click', function() {
    const newReview = document.getElementById('newReview').value;
    fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: newReview}),
    })
    .then(() => {
        // 送信が成功したら、新しいレビュー一覧を取得して表示する
        fetch('http://localhost:3000/reviews')
            .then(response => response.json())
            .then(data => {
                const reviewsDiv = document.getElementById('reviews');
                // 既存のレビューをクリアする
                while (reviewsDiv.firstChild) {
                    reviewsDiv.removeChild(reviewsDiv.firstChild);
                }
                // 新しいレビュー一覧を表示する
                data.forEach(review => {
                    const reviewDiv = document.createElement('div');
                    reviewDiv.classList.add('review');  // CSS styling
                    reviewDiv.textContent = review.text;
                    reviewsDiv.appendChild(reviewDiv);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});



// Get the "Add Review" button, the review form, the textarea, and the "Submit Review" button
var addReviewButton = document.getElementById('addReviewButton');
var addReviewForm = document.getElementById('addReviewForm');
var newReview = document.getElementById('newReview');
var submitReviewButton = document.getElementById('submitReviewButton');

// Show the form when the "Add Review" button is clicked
addReviewButton.addEventListener('click', function() {
    addReviewForm.style.display = 'block';
});

// Add the new review to the page when the "Submit Review" button is clicked
submitReviewButton.addEventListener('click', function() {
    var reviewText = newReview.value.trim();

    if (reviewText) {
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: reviewText }),
        })
        .then(response => response.json())
        .then(data => {
            var reviewElement = document.createElement('p');
            reviewElement.textContent = reviewText;

            var reviewsSection = document.getElementById('reviews');
            reviewsSection.appendChild(reviewElement);

            // Clear the textarea and hide the form
            newReview.value = '';
            addReviewForm.style.display = 'none';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

function loadReviews() {
    fetch('http://localhost:3000/reviews')
    .then(response => response.json())
    .then(data => {
        const reviewSection = document.getElementById('reviews');
        data.data.forEach(review => {
            const p = document.createElement('p');
            p.textContent = review.text;
            reviewSection.appendChild(p);
        });
    })
    .catch(error => console.error('Error:', error));
}

window.addEventListener('load', loadReviews);

// 既存の JavaScript コード ...

window.addEventListener('load', (event) => {
    fetch('http://localhost:3000/reviews')
        .then(response => response.json())
        .then(data => {
            const reviewsDiv = document.getElementById('reviews');
            data.forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.classList.add('review');  // CSS styling
                reviewDiv.textContent = review.text;
                reviewsDiv.appendChild(reviewDiv);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
