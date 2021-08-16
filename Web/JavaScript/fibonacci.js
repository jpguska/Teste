//provavelmente n vai funcionar.
//é errado instanciar o vetor desse jeito, mas seria errado em caso de eu usar um vetor sem length :)
var fibonacci = new Array(64);
//duuuuuuh
for(var n = 0; n < fibonacci.length; n++){
    //bloat
    if(n === 0){
        fibonacci[n] = n;
    } else if(n === 1){
        fibonacci[n] = n;
    } else if(n === 2){
        fibonacci[n] = n;
    } else{
        //unica parte que presta cara! :D
        fibonacci[n] = fibonacci[n - 1] + fibonacci[n -  2];
    }
    console.log(fibonacci[n]);
    //wtf funciona???? LOL
}