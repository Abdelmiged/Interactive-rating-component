let ratingButtons = document.querySelectorAll('.rating-container > button');
let submitButton = document.querySelector('.submit-button');

Array.from(ratingButtons).forEach((item) => {
    item.addEventListener("click", saveToLocalStorage);
});


function saveToLocalStorage(e) {
    window.localStorage.setItem("ratingValue", e.currentTarget.innerHTML);
}

submitButton.addEventListener("click", () => {
    window.open("../../src/pages/success.html", "_blank");
})
