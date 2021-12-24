const allColors = ["#FF0000", "#008000", "#FFFF00", "#0000FF"];

const insertCards = () => {
    const container = document.createElement("div");
    container.className = "card-container";
    for(let i = 0; i < allColors.length; i++) {
        let card = document.createElement("div");
        card.className = "card-item container-margin";
        card.style.backgroundColor = allColors[i];
        container.appendChild(card);
    }
    document.body.insertBefore(container, document.body.firstElementChild);
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

