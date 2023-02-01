function countdown(count){

    setTimeout(function() {
            while(count > 0){
                console.log(count);
                count--;
            }
            console.log("DONE!");
        },1000);
    
}