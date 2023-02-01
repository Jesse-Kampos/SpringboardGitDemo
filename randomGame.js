function randomNumber(){
    let count = 0;
    let num = Math.random().toPrecision(2);

    while(num < .75){

    num = Math.random().toPrecision(2);
    count++;

    }
    
    console.log(`Count: ${count}`)
    console.log(`Num: ${num}`);
}

function randomGame(){
    setTimeout(randomNumber, 1000)
}
