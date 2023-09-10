let ratingValueContainer = document.querySelector('.rating-value');

ratingValueContainer.textContent = `You selected ${window.localStorage.getItem("ratingValue")} out of 5`;