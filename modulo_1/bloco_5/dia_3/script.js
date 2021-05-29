function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Ex 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let Alldays = document.getElementById('days');
for (const iterator of dezDaysList) {
  let element = document.createElement('li');
  element.innerText = iterator;
  element.classList.add('day');

  if (iterator === 24 | iterator === 25 | iterator === 31) {
    element.classList.add('holiday');
  }
  if (iterator === 4 | iterator === 11 | iterator === 18 | iterator === 25) {
    element.classList.add('friday');
  }
  Alldays.appendChild(element);
}

//Ex 2
function holidays(Feriados) {
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  let button = document.createElement('button');
  button.innerHTML = Feriados;
  button.setAttribute('id', 'btn-holiday')
  buttonsContainer.appendChild(button);
}
holidays('Feriados')

//Ex 3
