// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let num = 1;
let soma = 0;

while(num <= 100){
    // soma = soma + num;
    soma += num;
    console.log(soma)
    num++;
}

console.log("A soma dos números de 1 a 100 é: " + soma);