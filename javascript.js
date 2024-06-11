const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("gridElement")
        div.setAttribute("style", "height: 48px; width: 48px; border: black solid 1px");
        container.appendChild(div)
    }

}

function hoverColor () {
    let gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "red"})
    })
}


hoverColor()