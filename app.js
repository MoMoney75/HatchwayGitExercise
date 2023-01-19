//COUNT DOWN EXCERCISE BELOW!
function countDown(num) {
  let myInterval = setInterval(() => {
    console.log(num);
    num = num - 1;
    if (num === 0) {
      clearInterval(myInterval);
      console.log("DONE!");
    }
  }, 1000);
}

// RANDOM GAME EXECERCISE BELOW!

let interval = setInterval(function randomGame() {
  let counter = 0;
  let num = Math.random();
  let total = counter++;

  if (num > 0.75) {
    console.log(num, total);
    clearInterval(interval);
  } else {
    console.log(num);
  }
}, 1000);
