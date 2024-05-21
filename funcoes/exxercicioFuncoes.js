// construir um menu que é possivel escolher um exercicioentre os exercicios anteriores, para ser executqadi.
// Faça com que o menu repita a sua exeução até o usuario digitar sair

function exercicioifelse() {

    let numero = parseInt(prompt("Digite um numero: "))

    if (numero % 2 == 0) {
        console.log("e par")

    }
    else {
        console.log("e impar")
    }
}

function excifelse2() {
    let idade = parseFloat(prompt("Digite sua idade:"))

    if (idade < 18) {
        console.log("Ë menor de idade")
    }

    else {
        console.log("Ë maior de idade")
    }
}

function excifelse3() {
    let valorTotal = parseFloat(prompt("valor total da compra:"))

    let desconto;
    if (valor <= 100) {
        desconto = 0;
        console.log("O valor do desconto foi: " + desconto)
    }

    else if (valorTotal <= 200) {
        desconto = 0.1;
        console.log("O valor do desconto foi: " + (desconto * 100) + "%")
    }

    else {
        desconto = 0.2;
        console.log("O valor do desconto foi: " + (desconto * 100) + "%")
    }

    let valorFinal = valorTotal - (valorTotal * desconto);
}

function excfor1() {
    for (let num = 1; num <= 10; num++) {

        console.log(num);

    }
}

function excfor2 () {
    for (let numero = 2; numero <= 10; numero += 2) {
        console.log(numero);
    }
}

function excfor3 () {
    let numero = parseInt(prompt("Digite um numero para ver a tabuada"));

if(!isNaN(numero)){
for(let cont = 1; cont <= 10; cont++){
    console.log(numero + "x" + cont + "=" + (numero*cont))
}
}else{
    console.log("Numero invalido. Por favor, ")
}

console.log(isNaN("Helloword"))
console.log(isNaN(123))

}

function sair (){
    window.prompt("Digite sair para finalizar o programa")
}



let opcao;


do{
    opcao = window.prompt("MENU\nDIgite a opcao desejada:\n\n1 -Exercicio par impar (if else)\n2 -Exercicio Idade (if else)\n3 -Exercicio Desconto (if else)\n4 -Exercicio contagem (for while)\n5 -exercicio (for while)\n6 -exercico tabuada (for while)\n7 -sair  ")
    
    switch (opcao) {
        case "1":
            exercicioifelse()
            break;
    
        default:
            excifelse2()
            break
    
        case "3":
            excifelse3()
            break;
            
        case "4":
            excfor1()
            break
        
        case "5":
            excfor2()
            break
        
        case "6":
            excfor3()
            break
    
        case "7":
            sair()
            break
    
    }
    

}while(opcao != "sair")


