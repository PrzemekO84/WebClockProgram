//Id

const changeToUsaTime = document.getElementById("US")
const changeToEuTime = document.getElementById("EU")

//Times






function usaTime(){
    const usAmPm = hour >= 12 ? `PM` : "AM"
    if(hour % 12 === 0){
        hour = 12;
    }
    else{
        hour = hour % 12;
    }
    const timeDisplay = `${hour}:${minutes}:${seconds} ${usAmPm}`
    document.getElementById("clock").textContent = timeDisplay;
}

function euTime(){
    const time = new Date();
    let hour = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    const timeDisplay = `${hour}:${minutes}:${seconds}`
    document.getElementById("clock").textContent = timeDisplay;
}

setInterval(euTime, 1000);

// changeToEuTime.onclick = euTime;
// changeToUsaTime.onclick = usaTime;