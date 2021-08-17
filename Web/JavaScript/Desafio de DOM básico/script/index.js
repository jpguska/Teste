let randomNumer1 = Math.floor((Math.random() * 6) + 1);
let randomNumer2 = Math.floor((Math.random() * 6) + 1);

//BLOAT DE SWITCH!!!
//cada switch coleta a variação dos numeros aleatórios e aplica o numero nos dados
//com base nos numeros gerados :D
//Esse aplica pro 1
switch(randomNumer1){
    case 1:
        document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
    break;
    case 3:
        document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
        break;
}
//E esse aplica pro 2
switch(randomNumer2){
    case 1:
        document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
    break;
    case 3:
        document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
        break;
        case 6:
        document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
        break;
}

if(randomNumer1 > randomNumer2){
    document.querySelector("h1").innerHTML = "PLAYER 1 GANHOU!!!"
}
if(randomNumer2 > randomNumer1){
    document.querySelector("h1").innerHTML = "PLAYER 2 GANHOU!!!"
}
if(randomNumer1 === randomNumer2){
    document.querySelector("h1").innerHTML = "EMPATE..."
}
