
let peopleCount=document.getElementById("people-count");
let previousEntered = document.getElementById("previous-en");
let count=0;
function increment(){
    count+=1;
    peopleCount.textContent=count;
    
}

function save(){
    countEl=count + " - ";
    previousEntered.textContent += countEl;
    count=0;
    peopleCount.textContent=count;
}
 


 