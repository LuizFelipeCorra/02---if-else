//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade  = 18;
if (idade >=18){
    console.log("Parabéns, voce é maior idade.")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let Maior = 18
let Humano = "Humano"

if ((Maior >= 18) && (Humano === "Humano")){
    console.log("Você é maior de idade, entrada permitida.")
}
else{
    console.log("Você não é maior de idade, entrada proibida.")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario = "janeiro";
let mes = "dezembro";

if((aniversario === "janeiro") || (mes === "dezembro")){
    console.log("Seu aniversário é em janeiro ou em dezembro")
}
else{
    console.log("Você não faz aniversário em janeiro ou  dezembro")
}
