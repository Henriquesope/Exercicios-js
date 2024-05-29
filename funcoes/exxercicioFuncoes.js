// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado. Faça com que o menu repita a sua execução, disponibilize as opções para o usuário, até que seja digitado "sair"

function exercicioLogin() {
    let username = prompt("Digite o seu usuário: ");

    let senha = prompt("Digite sua senha: ");

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!");
    }
    else {
        console.log("Você não tem permissão de acesso!");
    }
}

function numParImpar() {
    let num = parseInt(prompt("Informe um número inteiro: "));

    if (num % 2 == 0) {
        console.log("O número informado é par");
    }
    else {
        console.log("O número informado é ímpar");
    }
}

function exercicioTabuada() {
    let numero = parseInt(prompt("Digite um número para ver na tabuada: "));


    if (!isNaN(numero)) {
        for (let cont = 1; cont <= 10; cont++) {
            console.log(numero + " X " + cont + " = " + (numero * cont));
        }

    } else {
        console.log("Número invalido. Por favor, digite um número válido.")
    }

    console.log(isNaN("Hello World")); // retorna true 
    console.log(isNaN(123)); // retorna false 
}

function exercicioNumeroPar (){
    for(let num = 1; num <=10; num++){
        if(num%2 == 0){
            console.log(num);
        }
    }
    
    
    for(let cont = 2; cont <= 10; cont+=2){
        console.log(cont)
    }
}

function exercicioSoma1a100 () {
    let num = 1;
let soma = 0;

while(num <= 100){
    // soma = soma + num;
    soma += num;
    console.log(soma)
    num++;
}

console.log("A soma dos números de 1 a 100 é: " + soma);
}

function exercicioFibonnati () {
    //Inicializar os primeiros dois números da sequência deFibonacci.
let fib1 = 1;
let fib2 = 1;

//Imprime os primeiros 10 números da sequência de Fibonacci.
console.log("Os primeiros 10 números da sequência de Fibonacci são: ");
console.log(fib1);
console.log(fib2);

//Itera para calcular e imprimir os próximos 8 números da sequência.
for(let i = 2; i < 10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    //Atualizar os valores de fib1 e fib2 para os proximos calculos
    fib1 = fib2;
    fib2 = nextFib;
}
}

// let opcao;

// do {
//     opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio Par ou Impar\n3 - Exercicio Tabuada")

//     console.clear()

//     switch (opcao) {
//         case "1":
//             exercicioLogin()
//             break;

//         case "2":
//             numParImpar()
//             break;

//         case "3":
//             exercicioTabuada()
//             break;

//         default:
//             break;
//     }

// } while (opcao != "sair");

let resposta = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio Par ou Impar\n3 - Exercicio Tabuada\n 4-exercicio numeros pares\n 5-exercicio soma 1 a 100\n 6-exercicio fibonatti")

while (resposta != "sair" "SAIR" "0") {

    switch (resposta) {
        case "1":
            exercicioLogin()
            break;

        case "2":
            numParImpar()
            break;

        case "3":
            exercicioTabuada()
            break;

        case "4":
            exercicioNumeroPar()
            break;

        case "5":
            exercicioSoma1a100()
            break;
        
        case "6":
            exercicioFibonnati()
            break;
    }

    resposta = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login\n2 - Exercicio Par ou Impar\n3 - Exercicio Tabuada\n 4-exercicio numeros pares\n 5-exercicio soma 1 a 100\n 6-exercicio fibonatti")
    console.clear()
}