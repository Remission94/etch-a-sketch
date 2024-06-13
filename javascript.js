const container = document.querySelector(".container");
let gridElements 


function defautGrid () {
    for (let i = 0; i < 16; i++) {
        for (let i = 0; i < 16; i++) {
            const div = document.createElement("div");
         div.classList.add("gridElement")
            div.setAttribute("style", "height: 48px; width: 48px; border: black solid 1px");
            container.appendChild(div)
        }
    }
    gridElements = document.querySelectorAll(".gridElement");
    hoverColor()
}

defautGrid()

function clear () {
    gridElements.forEach(element => {
        element.style.backgroundColor = "white"})
}

function newGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    let input = document.querySelector("#numOfSquares")
    let inputValue = input.value
    let newDim = 800/inputValue-2+"px";
    for (let i = 0; i < inputValue; i++) {
        for (let i = 0; i < inputValue; i++) {
            const div = document.createElement("div");
            div.classList.add("gridElement")
            div.style.border = "black solid 1px";
            div.style.height = newDim
            div.style.width = newDim
            container.appendChild(div)
        }
    }
    gridElements = document.querySelectorAll(".gridElement");
    hoverColor()
}


function hoverColor () {  
    gridElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "red"})
    })
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return 'rgb(${r},${g},${b})';
}


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear)

const enterBtn = document.querySelector("#enter");
enterBtn.addEventListener("click", newGrid)

