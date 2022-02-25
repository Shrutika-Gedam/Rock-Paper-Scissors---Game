const rBtn = document.getElementById('Rock');
const pBtn = document.getElementById('Paper');
const sBtn = document.getElementById('Scissors');
const usersco = document.getElementById('user-score');
const compsco = document.getElementById('computer-score');
const movesco = document.getElementById('movesleft');
const buttons = document.getElementById('choices');
const reset = document.getElementById('reload');
const result_txt = document.getElementById('result');
const text = document.getElementById('mgs');

reset.style.display = "hidden";

let userchoice=0;
let compchoice=0;
let moves =10;
        
rBtn.addEventListener('click', rock )
pBtn.addEventListener('click', paper )
sBtn.addEventListener('click', scissors )

function rock(event){
  userchoice = 0;
  Game()
}

function paper(event){
  userchoice = 1;
  Game()
}
       
function scissors(event){
  userchoice = 2;
  Game()
}
       
const choice = [["tie","comp","user"],
                ["user","tie","comp"],
                ["comp","user","tie"]]

function Game(){
    compchoice= Math.floor(Math.random()*3);
    const foo = choice[userchoice][compchoice];
    moves = parseInt(movesco.textContent);
    movesco.textContent = moves-1;

    console.log(moves)
    switch(foo) {
      case "user":
        c = usersco.textContent
        k = parseInt(c)+1;
        usersco.textContent = k;
        result_txt.textContent = 'You Win !!!'
        break;
      case "comp":
        c = compsco.textContent
        k = parseInt(c)+1;
        compsco.textContent = k;
        result_txt.textContent = 'You Lost !!!'
        break;
      case "tie":
        result_txt.textContent = 'Its a Tie.....'
        //code
        break;
      default:
        // code block
    }
    
    if (moves == 1){
          //game over
          Result();
          return;
    }     
        
}

         function Result() {

          movesco.textContent = "Alert! Nuclear codes unlocked detonation in T-10 seconds";

          buttons.style.visibility = "hidden";
          text.style.visibility = "hidden";
          reset.style.display = "block";

          reset.addEventListener('click', resetBtn )
          function resetBtn(event){
          location.reload();
        }
           
           if (usersco.textContent > compsco.textContent){
             result_txt.style.fontSize = '4rem';
             result_txt.innerText = 'You Won The Game!'
             result_txt.style.color = 'green'
             result_txt.style.textAlign = "center";
           }else if (compsco.textContent > usersco.textContent) {
            result_txt.style.fontSize = '4rem';
            result_txt.innerText = 'You Lost The Game'
            result_txt.style.color = 'red'
            result_txt.style.textAlign = "center";
           }else {
            result_txt.style.fontSize = '4rem';
            result_txt.innerText = 'Its a Tie........'
            result_txt.style.color = 'yellow'
            result_txt.style.textAlign = "center";
           }

       }
    
