// 🚀 Modifique a variável para que não ocorra Erro;

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
// const pessoa = {
//   nome: 'Henri',
//   idade: 20
// }
// pessoa = {
//   nome: 'Luna',
//   idade: 19
} // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

//RESPOSTA:

const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa.nome = 'Luna'
pessoa.idade = 19

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// 🚀 Transforme a função hello em uma arrow function;

function hello(nome) {
  return `Olá, ${nome}!`
}
let nome = 'Ivan';
console.log(hello(nome));

//RESPOSTA

const hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';

console.log(hello(nome));

// 🚀 Transforme a função nomeCompleto em uma arrow function;

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

//RESPOSTA

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// 🚀 Altere a expressão if/else utilizando ternary operator;

let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed));

//RESPOSTA

let speed = 90;
const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);
console.log(speedCar(speed));

//Crie uma função que ligue e desligue um motor de um carro.

let status = 'desligado';

const ligarDesligar = () => (
  status === 'desligado' ? status = 'ligado' : status = 'desligado'
)

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado

//🚀 Crie uma função que calcule a área de um círculo.

const pi = 3.14;
const circleArea = (raio) => pi * (raio ** 2);

console.log(`A área do círculo é: ${circleArea(5)}`);

//🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const str = 'Antônio foi no banheiro e não sabemos o que aconteceu';

//MINHA SOLUÇÃO
let strCopy = str.split(' ');
let maiorPalavra = strCopy[0];
for (let index in strCopy) {
  if (maiorPalavra.length < strCopy[index].length) {
    maiorPalavra = strCopy[index];
  }
}
console.log(maiorPalavra);

//BONUS

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));

//COM FUNÇÃO COMO PEDIDO NO EXERCICIO

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
