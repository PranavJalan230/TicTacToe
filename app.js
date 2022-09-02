let containerItem = document.getElementsByClassName("containerItem");

let turn = "X";

const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
};

function checkWin() {
     let item = document.getElementsByClassName("item");
     
     let wins = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
     ]  
     
     wins.forEach(e =>{
        if ((item[e[0]].innerText == item[e[1]].innerText) && (item[e[1]].innerText == item[e[2]].innerText) && (item[e[0]].innerText !== ""  )) {
            
            document.querySelector(".gameturn").innerText = item[e[0]].innerText + " Won the Match";
            item[e[0]].style.color = "green";
            item[e[1]].style.color = "green";
            item[e[2]].style.color = "green";
            document.querySelector(".gameturn").style.color = "green";
            
        }
       
            
    
     });
     
    };

    Array.from(containerItem).forEach(function(element){
        let item = element.querySelector(".item");
    
        element.addEventListener("click", function () {
        if (item.innerText === "") {
            item.innerText = turn;
            turn = changeTurn();
            const gameTurn = document.querySelector(".gameturn").innerText ="Turn for" + " " + turn;
            const clear = document.querySelector(".clear");
            clear.addEventListener("click",function(){
               item.innerText = "";
               document.querySelector(".gameturn").innerText = " Turn for X";
               document.querySelector(".gameturn").style.color = "rgb(252, 42, 164)";
               item.style.color = "white";
               
            });
            checkWin();
           
    }
  });
});
