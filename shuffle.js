const allColors = ["#FF0000", "#008000", "#FFFF00", "#0000FF"];

function addColors() {  
    let card = document.querySelectorAll(".card-item");      
    for(let i = 0; i < allColors.length/2; i++) {
        card[i].style.backgroundColor = allColors[i];
    }
    for(let j = allColors.length - 1; j >= allColors.length/2; j--) {
        card[j].style.backgroundColor = allColors[allColors.length - j + 1];
    }
}
    
function shuffleColors() {
    const n = allColors.length - 1;
    let color = allColors[n];
    for(let i = n; i > 0; i--) {
        allColors[i] = allColors[i - 1]
    }
    allColors[0] = color;
    addColors();
}

// const button = document.querySelector("button");
// button.addEventListener("click", shuffleColors);

window.addEventListener("load", addColors);

