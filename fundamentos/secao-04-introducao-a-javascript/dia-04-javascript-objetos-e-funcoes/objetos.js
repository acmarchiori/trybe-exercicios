// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade');

player['fullName'] = player.name + ' ' + player.lastName;

console.log(player.fullName + ' conquistou ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');
//
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
//
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}
//
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let index in names) {
  console.log('Ola ' + names[index]);
}
//
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let index in car) {
  console.log(index,':', car[index]);
}
//
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value in food) {
  console.log(value);
};
//Função

// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo
//

function adicao(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
console.log(adicao(10,3));
console.log(subtracao(10,3));
console.log(multiplicacao(10,3));
console.log(divisao(10,3));
console.log(modulo(10,3));
//

function maiorNum(a, b){
  if(a > b) {
    return a + ' é maior que ' + b;
  }
  else if(b > a) {
    return b + ' é maior que ' + a;
  }
  else {
    return 'Os números são iguais';
  }
}
console.log(maiorNum(3,10));
//

function maiorNum(primNum, segNum, terNum){
  if(primNum > segNum && primNum > terNum) {
    return primNum + ' é o maior número';
  }
  else if(segNum > primNum && segNum > terNum) {
    return segNum + ' é o maior número';
  }
  else if(terNum > primNum && terNum > segNum) {
    return terNum + ' é o maior número';
  }
  else {
    return 'Os números são iguais';
  }
}
console.log(maiorNum(300,300,300));
//
function positivo(a){
  if(a > 0) {
    return a + ' é positivo';
  }
  else if(a < 0) {
    return a + ' é negativo';
  }
  else {
    return 'O número é igual a zero';
  }
}
console.log(positivo(0));

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

function triangulo(anguloA, anguloB, anguloC) {
  if(anguloA < 0 || anguloB < 0 || anguloC < 0) {
    return 'ERROR!';
  }
  else if(anguloA + anguloB + anguloC !== 180) {
    return false;
  }
  else if(anguloA + anguloB + anguloC === 180) {
    return true;
  } 
}
console.log(triangulo(40,60,80));


