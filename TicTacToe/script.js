const boxes = document.querySelectorAll(".component");
const btn = document.querySelector(".btn");
const current = document.querySelector(".current");


let currentPlayer;
let grid;
newGame();
let count = 0;


const winPos= [
    [0,1,2], [3,4,5], [6,7,8], //rows
    [0,3,6], [1,4,7], [2,5,8], //columns
    [0,4,8], [2,4,6] //diagonals
];

function newGame(){
    grid=["","","","","","","","",""];
    currentPlayer="X";
    current.innerText = `Current Player : ${currentPlayer}`;
    btn.classList.add("hidden");
    boxes.forEach((box , index) => {
        box.innerText = " ";
        boxes[index].style.pointerEvents = "all";
        box.classList.remove("win");
    });

};



boxes.forEach((box, index)=>{
    box.addEventListener("click",()=>{
        fillBox(index);
    }); 
});

function fillBox(index){
    if(grid[index]==="")
    {
        count++;
        grid[index]= currentPlayer;
        boxes[index].innerText = currentPlayer;
        swapPlayer();
        current.innertText = `Current Player : ${currentPlayer}`;
        checkWin();
        if(count===9)
        {
            current.innertText = "Game Tied !";
            btn.classList.remove("hidden");
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });
        }
        
    }
};

function checkWin(){
    winPos.forEach((position)=>{
        if(grid[position[0]] === grid[position[1]] && grid[position[1]] === grid[position[2]] && grid[position[0]] !== ""){
            btn.classList.remove("hidden");
            current.innertText = `Winner Player : ${currentPlayer}`;
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })
            p = position;
            win(position);
        }
    })
};

function swapPlayer(){
    if(currentPlayer = "X")
    {
        currentPlayer = "O";
    }
    else
    {
        currentPlayer = "X";
    }
};

function win(position){
    boxes[position[0]].classList.add("win");
    boxes[position[1]].classList.add("win");
    boxes[position[2]].classList.add("win");
    
}

btn.addEventListener("click", newGame);