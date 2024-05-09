// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let numero1 = parseFloat(prompt("Digite um numero: "))
let numero2 = parseFloat(prompt("Digite outro numero: "))
let numero3 = parseFloat(prompt("Digite outro numero: "))

if(numero1 < numero2 && numero2 < numero3){
    console.log("esta em ordem crecente")
}
else{
    console.log("Nao esta em ordem crescente")
}