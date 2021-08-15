function calcular(){
    //OLHA SÓ, BIBLIOTECA PRA GERAR RANDOM!!!!
let johnpipers = Math.random();
//MULTIPLICAR PARA ESTABELECER LIMITES DE UNIDADE SÓ QUE MATEMATICAMENTE FALANDO ISSO N É CERTO!!
johnpipers *= 100;
//PRA MATAR AS CASAS DECIEMAIS... quem gosta de casa decimal?
johnpipers = Math.floor(johnpipers) + 1;
document.write(`Você é ${johnpipers}% compatível com o João Pedro kkkkkk<br>`);
//imagina passar na condição e ser compatível com o João Pedro??? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
if(johnpipers >= 80){
    document.write("CARACA MANO TU É MT AZARADO KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK <br> IMAGINA SER COMPATIVEL COM O JOÃO PEDRO???? KKKKKKKKKKKKKKKKKKKK");
}
}