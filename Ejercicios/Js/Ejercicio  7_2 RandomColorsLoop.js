function getColor(colorNumber=0)
{
	//making sure is a number and not a string
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(){
	var myArray=[];
    //your loop here
    for (x=0;x<10;x++){
       var  exampleColor= getColor(Math.floor(Math.random() * (4 - 1)) + 1);
       myArray.push(exampleColor);
    }
    
    return myArray
}

console.log(getAllStudentColors());