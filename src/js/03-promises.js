const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const {
    elements: { delay:firstDelay, step, amount}
  } = e.currentTarget;


  let a = Number(firstDelay.value);
  if (firstDelay.value < 0 || step.value < 0 ) {
    alert("Value of delays can't be negative")
    return;
  }else if(amount.value <= 0){
    alert("Value of amount can't be negative or zero")
    return;
  }
  for (let i = 1; i <=amount.value ; i+=1) {
    createPromise(i, a)
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));
    a+= Number(step.value);
}

})


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
  
    setTimeout(()=> {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(` ✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(` ❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)

  }); 
};



