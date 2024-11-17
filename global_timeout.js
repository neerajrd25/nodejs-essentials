const waitTime = 10000;

console.log(`setiing ${waitTime / 1000} secs delay`);

let waitInterval = 1000;

let currentTime = 0;
const incrementTime = () => {
  currentTime += 1000;
  const p = Math.floor((currentTime / waitTime) * 100)
  process.stdout.clearLine();
  // process.stdout.cursorTo(Math.floor(Math.random() * 100))
  process.stdout.cursorTo(0)
  
  process.stdout.write(`........progress ${p} %`)
}
const interval = setInterval(incrementTime, waitInterval)

const timerFinished = () => {
  clearInterval(interval);
  console.log('done');
}

setTimeout(timerFinished, waitTime);

