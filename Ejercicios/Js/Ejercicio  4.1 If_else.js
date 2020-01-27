var price =0;

let userInput = prompt('How many people are coming to your wedding?');

if (userInput<= 50){
  price=4000;
}else if (userInput<= 100){
  price=10000;
}else if (userInput<= 200){
  price=15000;
}else {
  price=20000;
}
console.log('Your wedding will cost '+price+' dollars');