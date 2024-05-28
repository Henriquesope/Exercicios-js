// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let username = prompt("Digete o seu usuário");

let senha = prompt("Digite sua senha");

if(username == "admin" && senha == "senha123"){
    console.log("Login be sucedido!")
}
else{
    console.log ("Voce não tem permissão de acesso!")
}

