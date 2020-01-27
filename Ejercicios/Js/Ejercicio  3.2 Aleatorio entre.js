
//declare your function here
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log(generateRandom(1,10))