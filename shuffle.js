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
    const colorsLength = allColors.length - 1;
    let changeColor, dummyColor;

    let firstCard = container.firstElementChild;
    changeColor = firstCard.style.backgroundColor;

    for(let i = 0; i < colorsLength; i++) {
        firstCard = firstCard.nextElementSibling;
        dummyColor = firstCard.style.backgroundColor;
        firstCard.style.backgroundColor = changeColor;
        changeColor = dummyColor;
    }
    container.firstElementChild.style.backgroundColor = changeColor;
}

window.addEventListener("load", insertCards);

