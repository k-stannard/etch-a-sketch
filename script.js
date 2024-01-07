const grid = document.getElementById('sketch-container')
const gridSizeButton = document.getElementById('btn')
const colorBoxBlack = event => event.target.style.backgroundColor = "black"

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        const column = document.createElement('div')
        column.classList.add('column')
    
        for(let j = 0; j < size; j++) {
            const row = document.createElement('div')
            row.classList.add('row')
            column.appendChild(row)
        }

        grid.appendChild(column)
    }
}

createGrid(16)

function changeGridSize() {
    let input = prompt("Please enter a grid size")

    while(input > 100 || isNaN(input)) {
        input = prompt("Invalid input. Please try again.")

        if(input == null) {
            break
        }
    }

    if(input != null && input <= 100) {
        grid.replaceChildren()
        createGrid(input)
    }
}

function resetGrid(size = 16) {
    grid.replaceChildren()
    createGrid(size)
    grid.style.backgroundColor = "white"
}

grid.addEventListener('mouseenter', function() {
    grid.addEventListener('mousedown', colorBoxBlack)
    grid.addEventListener('mouseover', event => {
        if(event.buttons == 1) colorBoxBlack(event)
    })
}, false)