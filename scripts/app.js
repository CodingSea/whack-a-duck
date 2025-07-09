function init()
{
    const gridElem = document.querySelector('.grid');

    const cells = [];
    const gridWidth = 10;
    const numberOfCells = gridWidth * gridWidth;

    const scoreElem = document.querySelector("#score");
    let score = 0;

    let duckPosition = 20;

    function addDuck()
    {
        cells[duckPosition].classList.add("duck");
    }

    function removeDuck()
    {
        cells[duckPosition].classList.remove("duck");
    }

    function play()
    {
        setInterval(() =>
        {
            removeDuck();
            duckPosition = Math.floor(Math.random() * numberOfCells);
            addDuck();
        }, 3000);
    }

    function createGrid()
    {
        for(let i = 0; i < numberOfCells; i++)
        {
            const cell = document.createElement("div");
            //cell.classList.add("duck");
            //cell.textContent = i;
            cells.push(cell);
            gridElem.appendChild(cell);
        }

        console.log(cells);
    }

    createGrid();
    addDuck();
    //play();

    gridElem.addEventListener('click', function(event)
    {
        if(event.target.classList.contains("duck"))
        {
            removeDuck();
            duckPosition = Math.floor(Math.random() * numberOfCells);
            addDuck();
            score += 100;
            scoreElem.textContent = score;
        }
    })
}


document.addEventListener('DOMContentLoaded', init);