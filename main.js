const cardRating = document.querySelector(".card-rating")
const cardThanks = document.querySelector(".card-thanks")
const submitButton = document.getElementById("submit")
const inputWarning = document.getElementById("input-warning")
const rateAgainButton = document.getElementById("rate-again")
const ratingNumber = document.getElementById("rating-number")
const rating = document.querySelectorAll(".rating")

submitButton.addEventListener("click", () => {
    if (ratingNumber.innerHTML !== "0") {
        cardThanks.classList.remove("hidden")
        cardRating.style.display = "none"
    } else {
        inputWarning.classList.remove("hidden")
    }
})

rateAgainButton.addEventListener("click", () => {
    cardThanks.classList.add("hidden")
    cardRating.style.display = "block"
    ratingNumber.innerHTML = "0"
    inputWarning.classList.add("hidden")
})

rating.forEach((rate) => {
    rate.addEventListener("click", () => {
        ratingNumber.innerHTML = rate.innerHTML
    })
})

