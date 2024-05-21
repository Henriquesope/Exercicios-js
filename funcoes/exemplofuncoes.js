function saudacao() {
    let nomePessoa = prompt("Digite seu nome: ")
    let HoraAtual = new Date().getHours()

    if(HoraAtual > 6 && HoraAtual < 13) {
        window.alert ("Bom dia " + nomePessoa)

    } else if (HoraAtual >= 13 && HoraAtual < 18) {
        window.alert("Boa tarde " + nomePessoa)

    } else {
        window.alert("Boa noite " + nomePessoa)
    }
}

saudacao()

function somar(num1,  num2, num3) {
    let soma = num1 + num2 +num3

 
}

let resultado = somar(5, 6, 9)
let resultado2 = somar(1, 1, 1)

console.log("O resultado é: "  + resultado)