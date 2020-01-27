function fizzBuzz() {  
	var cont= 1;
var print=0;

	while (cont < 101){
	  print=cont;
	     if((print% 3 === 0)&&(print%5 === 0)){
	        print="FizzBuzz"
	      } else if(print%5 === 0){
	        print="Buzz";
	      }else  if (print% 3 === 0){
	        print="Fizz";
	      }
	      
	      else{
	        print=cont;
	      }
	      console.log (print);
	      cont++;
	}
}

fizzBuzz();