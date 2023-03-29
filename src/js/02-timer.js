import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startButton = document.querySelector("button[data-start]");
const daysNumb = document.querySelector("span[data-days]")
const hoursNumb = document.querySelector("span[data-hours]")
const minutesNumb = document.querySelector("span[data-minutes]")
const secondsNumb = document.querySelector("span[data-seconds]")
startButton.setAttribute("disabled", "")
let time;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24; 
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);  
    return { days, hours, minutes, seconds };
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {   
      const condition = selectedDates[0].getTime() > new Date().getTime();
      if (!condition) {
        window.alert("Please choose a date in the future");
        startButton.setAttribute("disabled", "")
        return;
        }
        time = selectedDates[0].getTime();
        startButton.removeAttribute("disabled");
    },
  };
  const fp = flatpickr("#datetime-picker", options) ;

  function handleStartButtonClick(){
    setInterval(() => {
        const convertedTime = convertMs(time - new Date().getTime());

    convertedTime.days < 10
    ? daysNumb.textContent = `0${convertedTime.days}`
    : daysNumb.textContent = convertedTime.days;

    convertedTime.hours < 10
    ? hoursNumb.textContent = `0${convertedTime.hours}`
    : hoursNumb.textContent = convertedTime.hours;

    convertedTime.minutes < 10
    ? minutesNumb.textContent = `0${convertedTime.minutes}`
    : minutesNumb.textContent = convertedTime.minutes;

    convertedTime.seconds < 10
    ? secondsNumb.textContent = `0${convertedTime.seconds}`
    : secondsNumb.textContent = convertedTime.seconds;
    }
    , 1000)
    
}

startButton.addEventListener("click", handleStartButtonClick);