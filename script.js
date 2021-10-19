console.log("Welcome to TIC TAC TOE");
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");
let isgameover = false;

let turn = "X";


 const changeturn = () =>{
     if(turn === "X")
     {
         return "0";
     }
     else{
         return "X";
     }
 }

 const winner = () =>{
     let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
        [0, 1, 2, 8, 8, 0],
        [3, 4, 5, 8, 28, 0],
        [6, 7, 8, 8, 49, 0],
        [0, 3, 6, -15, 27, 90],
        [1, 4, 7, 6, 27, 90],
        [2, 5, 8, 24, 27, 90],
        [0, 4, 8, 3, 31, 45],
        [2, 4, 6, 3, 31, 135],
     ]
     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "10rem";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "48vw";
        }
     })

 }

 //GAME LOGIC

let boxes = document.getElementsByClassName("box");
 
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            winner();
            if (!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+turn; 
            }
       
        }
       
    })
})


//  RESET

    reset.addEventListener('click', ()=>{
     let boxtext = document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element =>{
        element.innerText ='';
        })
        turn = "X"; 
        isgameover = false
        document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
    })

