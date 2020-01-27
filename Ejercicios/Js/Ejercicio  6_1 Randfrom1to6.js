function getRandomInt(min,max)
{
	var randomNumber = Math.floor(Math.random() * (max - min)) + min;
	return randomNumber;
}
console.log(getRandomInt(1,7));