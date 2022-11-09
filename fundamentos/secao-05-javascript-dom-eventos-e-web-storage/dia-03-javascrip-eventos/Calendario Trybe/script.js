const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Parte 1
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDayOfTheMonth = () => {
  const getDaysList = document.querySelector('#days');
    
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
createDayOfTheMonth();

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createHolidayButton = (buttonName) => {
  const buttonContainer = document.querySelector('.buttons-container');
  const newbutton = document.createElement('button');
  const newbuttonID = 'btn-holiday';

  newbutton.innerHTML = buttonName;
  newbutton.id = newbuttonID;

  buttonContainer.appendChild(newbutton);
}
createHolidayButton('Feriados');

// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

const displayHolidays = () => {
  const getHolidayButton = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'white';

  getHolidayButton.addEventListener('click', () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();

// Parte 4
// Primeiro passo:

// Crie a função e adicione variáveis para armazenar:
// o container de botões;
// a criação de um botão;
// o id do botão.

const createFridayButton = (buttonName) => {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton); 
}
createFridayButton('sexta-feira');

// Parte 5
// Primeiro passo:

// Crie a função e dentro dela as variáveis para armazenar:
// o botão “Sexta-feira”;
// um array de elementos com a classe friday;
// uma string que será exibida nos dias que são sextas-feiras.

const displayfridays = (fridaysArray) => {
  const getFridayButton = document.querySelector('#btn-friday');
  const fridays = document.getElementsByClassName('friday');
  const newFridayText = 'SEXTOU O/';

  getFridayButton.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}
let decemberFridays = [4, 11, 18, 25];
displayfridays(decemberFridays);

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;

// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// De olho na dica 👀: Você pode utilizar a propriedade event.target.

const dayMouseOver = () => {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

const dayMouseOut = () => {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
dayMouseOver();
dayMouseOut();

// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const newTaskSpan = (task) => {
  const taskContainer = document.querySelector('.my-tasks');
  const taskName = document.createElement('span');

  taskName.innerHTML = task;
  taskContainer.appendChild(taskName);
}
newTaskSpan('cozinhar');

// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const newTaskDiv = (color) => {
  const taskContainer = document.querySelector('.my-tasks');
  const newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  taskContainer.appendChild(newTask);
}
newTaskDiv('green');

// Parte 9
// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

// const setTaskClass = () => {
//   const selectedTask = document.getElementsByClassName('task selected');
//   const myTasks = document.querySelector('.task');
//   myTasks.addEventListener('click', (event) => {
//     if (selectedTask.length === 0) {
//       event.target.className = 'task selected'
//     } else {
//       event.target.className = 'task'
//     }
//   });
// }
// setTaskClass();

//Resolução da Parte 9 usando togle

const setTaskClass = () => {
  //captura o elemento com id 'task
  const myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', (event) => {
    //o evento click vai atuar no target (onde o mouse clica), adicionando a class 'selected' no target, caso ele não o tenha, e retira caso ele o tenha.
    event.target.classList.toggle('selected');
  });
}
setTaskClass();

// Parte 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

const setDayColor = () => {
  const selectedTask = document.getElementsByClassName('task selected');
  const days = document.querySelector('#days');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', (event) => {
    const eventTargetColor = event.target.style.color; 
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      const color = selectedTask[0].style.backgroundColor; //Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}
setDayColor();

// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// De olho na dica 👀: Você pode utilizar a propriedade key.

const addNewTask = () => {
  const getInputField = document.querySelector('#task-input');
  const addInputButton = document.querySelector('#btn-add');
  const getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.'); // Cria um alerta para informar que não tem texto digitado
    }    
  });
  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      // Aqui ele verifica se a tecla pressionada é o "Enter" e a quantidade de letras
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();

