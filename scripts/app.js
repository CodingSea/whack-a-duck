function init()
{
    // all coe goes here
    const gridElem = document.querySelector('.grid');

    function createGrid()
    {
        for(let i = 0; i < 100; i++)
        {
            const cell = document.createElement("div");
            cell.textContent = i;
            gridElem.appendChild(cell);
        }
    }

    createGrid();
}


document.addEventListener('DOMContentLoaded', init);