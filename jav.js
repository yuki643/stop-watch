let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let hours = 0;
let minutes = 0;
let seconds = 0;

let newHours = 0;
let newMinutes = 0;
let newSconds = 0;


let interval;

function stopWatch(){
  seconds++;
  if(seconds / 60 ==1){
    minutes++;
    seconds = 0;
  if(minutes / 60 == 1) {
    hours++;
    minutes = 0;
  }
  }
  
  if(seconds < 10){
  newSconds = "0" + seconds;
  }else{newSconds = seconds;
    
  }
  
  if(minutes < 10){
  newMinutes = "0" + minutes;
  }else{newMinutes = minutes;
    
  }
  
  if(hours < 10){
  newHours = "0" + hours;
  }else{newHours = hours;
    
  }
  
display.innerHTML = newHours + ":" + newMinutes + ":" + newSconds;
  
  

}
start.addEventListener("click",()=>{
  
    interval=setInterval(stopWatch,100);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    
  
})

stop.addEventListener('click' , () =>{
  
  
   clearInterval(interval);
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = false;
})


reset.addEventListener('click' , () => {
  display.innerHTML = "00:00:00";
   hours = 0;
   minutes = 0;
   seconds = 0;
  
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = true;
  
  
})




