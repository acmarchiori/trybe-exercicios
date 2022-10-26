// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function palindromo (str) {
//   let reverse = str.split('').reverse().join('');
//   if (reverse === str){
//     return true
//   }
//   else {
//     return false
//   }
// }

// console.log(palindromo('racecar'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function indiceDoMaior(numeros){
//   let indiceDoMaior = 0;
//   for (let index in numeros){
//       if (numeros[indiceDoMaior] < numeros[index]){
//         indiceDoMaior = index;
//     }
//   }
//   return indiceDoMaior;
// }      

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function indiceDoMenor(numeros){
//   let indiceDoMenor = 0;
//   for (let index in numeros){
//       if (numeros[indiceDoMenor] > numeros[index]){
//         indiceDoMenor = index;
//     }
//   }
//   return indiceDoMenor;
// }      

// console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorPalavra(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let index in palavras) {
//     if (maiorPalavra.length < palavras[index].length){
//       maiorPalavra = palavras[index];
//     }
//   }
//   return maiorPalavra;
// }

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetido (numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function somaTodosNumeros(numero) {
//   let total = 0;

//   for (let index = 1; index <= numero; index += 1) {
//     total = total + index;
//   }
//   return total;
// }

// console.log(somaTodosNumeros(5));

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false


// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//   let result;
//   for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//     if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//       result = false;
//       break;
//       break; // O "break" serve para encerrar o loop.
//     } else {
//       result = true;
//     }
//   }
  
//   return result;
// }

// console.log(verificaFimPalavra('trybe', 'be')); 
// console.log(verificaFimPalavra('joaofernando', 'fernan')); 

// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// const result = {};

// for (let index = 0; index < basket.length; index += 1) {
//   const fruit = basket[index];
//   if (!result[fruit]) result[fruit] = 0;
//   result[fruit] += 1;
// }

// const summaries = [];

// for (fruit in result) {
//   let message = `${result[fruit]} ${fruit}`;
//   if (result[fruit] > 1) message += 's';
//   summaries.push(message);
// }

// console.log(`Sua cesta possui: ${summaries.join(', ')}.`);


