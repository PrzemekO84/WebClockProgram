//Id

const changeToUsaTime = document.getElementById("US")
const changeToEuTime = document.getElementById("EU")

//Deafult timer

let defaultTimer;

function usaTime(){
    const timeUSA = new Date();
    let hour = timeUSA.getHours();
    const minutes = timeUSA.getMinutes().toString().padStart(2, 0);
    const seconds = timeUSA.getSeconds().toString().padStart(2, 0);
    const usAmPm = hour >= 12 ? `PM` : "AM"
    if(hour % 12 === 0){
        hour = 12;
    }
    else{
        hour = hour % 12;
    }
    hour = hour.toString().padStart(2, 0);
    const timeDisplay = `${hour}:${minutes}:${seconds} ${usAmPm}`
    document.getElementById("clock").textContent = timeDisplay;
}

function euTime(){
    const timeEU = new Date();
    const hour = timeEU.getHours().toString().padStart(2, 0);
    const minutes = timeEU.getMinutes().toString().padStart(2, 0);
    const seconds = timeEU.getSeconds().toString().padStart(2, 0);
    const timeDisplay = `${hour}:${minutes}:${seconds}`
    document.getElementById("clock").textContent = timeDisplay;
}

euTime();

defaultTimer = setInterval(euTime, 1000);


changeToUsaTime.onclick = function() {
    clearInterval(defaultTimer);
    usaTime(); 
    defaultTimer = setInterval(usaTime, 1000);
};

changeToEuTime.onclick = function() {
    clearInterval(defaultTimer); 
    euTime(); 
    defaultTimer = setInterval(euTime, 1000); 
};
    

    


