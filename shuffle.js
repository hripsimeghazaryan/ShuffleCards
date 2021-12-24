const allColors = ["#FF0000", "#008000", "#FFFF00", "#0000FF"];
const cards = `<div class="card-item container-margin" style="background-color: #FF0000"></div>
    <div class="card-item container-margin" style="background-color: #008000"></div>
    <div class="card-item container-margin" style="background-color: #0000FF"></div>
    <div class="card-item container-margin" style="background-color: #FFFF00"></div>`;

const insertCards = () => {
    let cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = cards;
}

const shuffleColors = () => {
    const container = document.querySelector(".card-container");
    const first = container.firstChild;
    const last = container.lastChild;
    const lastColor = last.previousElementSibling.style.backgroundColor;
    last.previousElementSibling.style.backgroundColor = last.style.backgroundColor;
    last.style.backgroundColor = first.nextElementSibling.style.backgroundColor;
    first.nextElementSibling.style.backgroundColor = first.style.backgroundColor;
    first.style.backgroundColor = lastColor;
}

window.addEventListener("load", insertCards);

