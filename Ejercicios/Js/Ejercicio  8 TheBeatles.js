function sing(){
    var song=' let it be';

    for(i=1; i<=9;i++){
        song=song + ', let it be';
        if(i==3){
            song=song+', words of wisdom';
        }
        if(i==8){
            song=song+' there will be an answer';
        }
    }
    return song;
}
console.log(sing());