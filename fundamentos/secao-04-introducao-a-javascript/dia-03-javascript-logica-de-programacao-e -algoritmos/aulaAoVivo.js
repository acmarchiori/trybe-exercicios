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

let Carolzita = 75;
let Murilo = 90;
let Baêta = 140;

if (Carolzita < Murilo && Carolzita < Baêta) {
    console.log('Carolzita', Carolzita, 'é a pessoa mais nova.');
}
    else if (Murilo < Carolzita && Murilo < Baêta) {
        console.log('Murilo', Murilo, 'é a pessoa mais nova.');
}
    else if (Baêta < Carolzita && Baêta < Murilo) {
        console.log('Baêta', Baêta, 'é a pessoa mais nova.');
}
    else{
        console.log('Error');
}
