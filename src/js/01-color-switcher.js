const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]")
let timerId = null;
stopButton.setAttribute("disabled", "");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function setColor(){
    document.body.style.backgroundColor = `${getRandomHexColor()}`
}

const handleStartButtonClick = () => {
    startButton.setAttribute("disabled", "");
    stopButton.removeAttribute("disabled")
    timerId = setInterval(setColor, 1000);
};
const handleStopButtonClick = () => {
    stopButton.setAttribute("disabled", "");
    startButton.removeAttribute("disabled")
    clearInterval(timerId);
};

startButton.addEventListener("click", handleStartButtonClick);
stopButton.addEventListener("click", handleStopButtonClick);