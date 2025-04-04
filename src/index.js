//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////


function renderReviews(review) {

  //create review section
  const reviewSection = document.createElement('div');
  reviewSection.classList.add('review_container');

  //create img element for user
  const image = document.createElement('img');
  image.src = review.image;
  reviewSection.appendChild(image);

  //create div element
  const textDiv = document.createElement('div');

  //create username paragraph element
  const usernameParagraph = document.createElement('p');
  usernameParagraph.textContent = review.username;
  textDiv.appendChild(usernameParagraph);

  //create star paragraph element
  const starParagraph = document.createElement('p');
  starParagraph.textContent = `${review.star} stars`;
  textDiv.appendChild(starParagraph);

  //create review paragraph element
  const reviewParagraph = document.createElement('p');
  reviewParagraph.textContent = review.review;
  textDiv.appendChild(reviewParagraph);

  //append the text div -> then get review container
  reviewSection.appendChild(textDiv);

  //Append review section
  document.querySelector('.reviews').appendChild(reviewSection);
}
  //iterate through the reviews, then we render
  reviews.forEach(renderReviews);