 
function getColor(selection)

{
	switch(selection){
		//Add more options here
		case 'GREEN': return true;
		case 'green': return true;
		case 'Green': return true;
		case 'BLUE': return true;
		case 'Blue': return true;
	  case 'blue': return true;
		case 'RED': return true;
		case 'red': return true;
		case 'Red': return true;
		
	    default :
	    	return false;//return false because the user pick a unavailable color
	    break;               
	}
}

var colorname = window.prompt('What color do you want?');
colorname=colorname.toLowerCase();
var isAvailable = getColor(colorname);
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');