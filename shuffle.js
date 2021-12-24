const allColors = ["#FF0000", "#FB9A00", "#FFFF00", "#008000", "#0000FF", "#8700B1"];

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
    const n = allColors.length - 1;
    let last = container.lastChild;
    const lastColor = last.style.backgroundColor;
    for(let i = n; i > 0; i--) {
        last.style.backgroundColor = last.previousElementSibling.style.backgroundColor;
        last = last.previousElementSibling;
    }
    last.style.backgroundColor = lastColor;
}

window.addEventListener("load", insertCards);

