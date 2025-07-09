function init()
{
    const gridElem = document.querySelector('.grid');

    const cells = [];
    const gridWidth = 10;
    const numberOfCells = gridWidth * gridWidth;

    const scoreElem = document.querySelector("#score");
    let score = 0;

    const audioElem = document.querySelector("#quack")

    let duckPosition = 20;
    let totalDucks = 0;

    function addDuck()
    {
        cells[duckPosition].classList.add("duck");
    }

    function removeDuck()
    {
        cells[duckPosition].classList.remove("duck");
    }

    function placeRandomDuck()
    {
        removeDuck();
        duckPosition = Math.floor(Math.random() * numberOfCells);
        addDuck();
    }

    function play()
    {
        setInterval(() =>
        {
            if(totalDucks <= 10)
            {
                placeRandomDuck();
            }
            else
            {
                endGame();
            }
        }, 1000);
    }

    function endGame()
    {
        alert("Game Over, Score: " + score)
        score = 0;
        totalDucks = 0;
        scoreElem.textContent = score;
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
    play();

    gridElem.addEventListener('click', function(event)
    {
        if(event.target.classList.contains("duck"))
        {
            audioElem.pause();
            audioElem.currentTime = 0;
            placeRandomDuck();
            score += 10;
            scoreElem.textContent = score;
            audioElem.play();
        }
        totalDucks++;
    })
}


document.addEventListener('DOMContentLoaded', init);