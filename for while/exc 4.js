// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.


let numero = parseInt(prompt("Digite um numero para ver a tabuada"));

if(!isNaN(numero)){
for(let cont = 1; cont <= 10; cont++){
    console.log(numero + "x" + cont + " = " + (numero*cont));
}
}else{
    console.log("Numero invalido. Por favor, Digite outro")
}

console.log(isNaN("Helloword"));
console.log(isNaN(123));



