// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

// let soma = 0;

// for (let index = 1; index <= 50; index +=1) {
//     soma += index;
// }

// console.log(soma);

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let intervalo = 0;

// for (let index = 2; index <= 150; index += 1){
//     if (index % 3 == 0) {
//         intervalo += 1;
//     }
// }
// console.log("A quantidade de numeros divisiveis por 3 é: ",  intervalo);

// // if (intervalo == 50) {
// //     console.log('Mensagem secreta');
// // }
// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let Carolzita = 75;
// let Murilo = 90;
// let Baêta = 140;

// if (Carolzita < Murilo && Carolzita < Baêta) {
//     console.log('Carolzita', Carolzita, 'é a pessoa mais nova.');
// }
//     else if (Murilo < Carolzita && Murilo < Baêta) {
//         console.log('Murilo', Murilo, 'é a pessoa mais nova.');
// }
//     else if (Baêta < Carolzita && Baêta < Murilo) {
//         console.log('Baêta', Baêta, 'é a pessoa mais nova.');
// }
//     else{
//         console.log('Error');
// }

// Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Player 1 won” ou “A Ties” ou “Player 2 won”.

// let pedra = 'pedra';
// let papel = 'papel';
// let tesoura = 'tesoura';

// let Player1 = 'pedra';
// let Player2 = 'tesoura';

// if (Player1 == 'pedra' && Player2 == 'tesoura') {
//     console.log('Player1 won');
// }
// else if (Player1 == 'papel' && Player2 == 'tesoura') {
//     console.log('Player2 won');
// }
// else if (Player1 == 'tesoura' && Player2 == 'tesoura') {
//     console.log('A Ties');
// }
// else if (Player2 == 'pedra' && Player1 == 'tesoura') {
//     console.log('Player2 won');
// }
// else if (Player2 == 'papel' && Player1 == 'tesoura') {
//     console.log('Player1 won');
// }
// else if (Player1 == 'papel' && Player2 == 'papel') {
//     console.log('A Ties');
// }
// else if (Player1 == 'pedra' && Player2 == 'pedra') {
//     console.log('A Ties');
// }
// else if (Player1 == 'tesoura' && Player2 == 'papel') {
//     console.log('Player1 won');
// }
// else if (Player1 == 'papel' && Player2 == 'pedra') {
//     console.log('Player1 won');
// }
// else if (Player1 == 'pedra' && Player2 == 'papel') {
//     console.log('Player2 won');
// }

// Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// Bônus: Crie a condição utilizando operador ternário.

let pessoa = 'Antonio';
let idade = 17;

idade >= 18 ? console.log(pessoa, 'é maior de idade') : console.log(pessoa, 'é menor de idade');