// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let idade = parseFloat(prompt("Digite sua idade:"))

if(idade < 18){
    console.log("Ë menor de idade")
}

else{
    console.log("Ë maior de idade")
}