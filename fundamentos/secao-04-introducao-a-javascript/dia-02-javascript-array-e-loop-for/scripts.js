// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// **EXERCÍCIO 1**
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// **EXERCÍCIO 2**
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     result = result + numbers[index];
// }

// console.log(result);

// **EXERCÍCIO 3**
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     result += numbers[index];
// }

// console.log(result / numbers.length);

// **EXERCÍCIO 4**
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     result += numbers[index];
// }

// result = result / numbers.length;

// if (result > 20) {
//     console.log('valor maior que 20');
// } 
// else {
//     console.log('valor menor ou igual a 20');
// }  

// **EXERCÍCIO 5**
// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

// **EXERCÍCIO 6**
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

//**EXERCÍCIO 7**
// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < smallestNumber) {
//     smallestNumber = numbers[index];
//   }
// }

// console.log(smallestNumber);

// **EXERCÍCIO 8**
// let numbers = [];

// for (let index = 1; index <= 25; index += 1) {
//   numbers.push(index);
//   for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index] / 2);
// }
// }

// BONUS
// Ordene o array numbers em ordem crescente e imprima seus valores;
// Copiar

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
// Copiar

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
