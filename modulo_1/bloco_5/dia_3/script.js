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
let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
function holidayButton(Feriados) {
  let button = document.createElement('button');
  button.innerHTML = Feriados;
  button.setAttribute('id', 'btn-holiday')
  buttonsContainer.appendChild(button);
}
holidayButton('Feriados')


//Ex 3
function changeClassColor(className, color, bgColor) {
  let element = document.getElementsByClassName(className);
  for (const iterator of element) {
    iterator.style.color = color;
    iterator.style.backgroundColor = bgColor;
  }
}
function holidays() {

  let buttonHoliday = document.getElementById('btn-holiday');
  let holidayColorCheck = document.getElementsByClassName('holiday')[0];

  buttonHoliday.addEventListener('click', function () {
    if (holidayColorCheck.style.backgroundColor === 'rgb(242, 53, 53)') {
      changeClassColor('holiday', '#777', '#EEE');
    } else {
      changeClassColor('holiday', 'black', 'rgb(242, 53, 53)');
    }
  })
}
holidays();


//Ex 4
function fridayButton(sexta) {
  let button = document.createElement('button');
  button.setAttribute('id', 'btn-friday');
  button.innerHTML = sexta;
  buttonsContainer.appendChild(button);
}
fridayButton('Sexta-feira')


//Ex 5
function sextou() {
  let buttonFriday = document.getElementById('btn-friday');
  let fridayElements = document.getElementsByClassName('friday');
  let fridays = [4, 11, 18, 25];

  buttonFriday.addEventListener('click', function () {

    for (let i = 0; i < fridayElements.length; i += 1) {
      let element = fridayElements[i];
      if (element.innerHTML === 'Sextou \o/') {
        element.innerHTML = fridays[i]
      } else {
        element.innerHTML = 'Sextou \o/';
      }
    }
  })
}
sextou();


//Ex 6
function zoomInDays() {
  let days = document.getElementsByClassName('day');

  for (let element of days) {
    element.addEventListener('mouseover', function () {
      element.style.fontSize = '40px';
    })
  }
}

function zoomOutDays() {
  let days = document.getElementsByClassName('day');

  for (let element of days) {
    element.addEventListener('mouseleave', function () {
      element.style.fontSize = '20px';
    })
  }
}
zoomInDays();
zoomOutDays();


//Ex 7
function taskCreate(taskName) {

  let spanTag = document.createElement('span');
  let myTasks = document.getElementsByClassName('my-tasks')[0];
  spanTag.innerHTML = taskName;
  myTasks.appendChild(spanTag);
}
taskCreate('Projeto');


//Ex 8
function colorCreate(color) {
  let divColor = document.createElement('div');
  let myTasks = document.getElementsByClassName('my-tasks')[0];
  divColor.classList.add('task');
  divColor.style.backgroundColor = color;
  myTasks.appendChild(divColor);

}
colorCreate('green');


//Ex 9
function selectColor() {
  let divColor = document.getElementsByClassName('task')[0];
  divColor.style.cursor = "pointer";
  divColor.addEventListener('click', function () {
    if (divColor.className === 'task selected') {
      divColor.classList.remove('selected');
    } else {
      divColor.classList.add('selected')
    }
  })
}
selectColor();


//Ex 10
function colorDays() {
  let divColor = document.getElementsByClassName('task')[0];
  let days = document.getElementsByClassName('day');

  for (let element of days) {
    element.style.cursor = 'pointer';
    element.addEventListener('click', function (event) {
      if (divColor.className === 'task selected') {
        if (event.target.style.color !== 'green') {
          element.style.color = divColor.style.backgroundColor;
        } else if (event.target.style.color === 'green') {
          element.style.color = 'rgb(119, 119, 119)';
        }
      }
    })
  }
}
colorDays();


//Bônus
function addAppointment() {
  let inputText = document.getElementById('task-input');
  let btnInput = document.getElementById('btn-add');
  let appointments = document.getElementsByClassName('input-container')[0];

  function createInput() {
    newAppointment = document.createElement('h1');
    newAppointment.innerHTML = inputText.value;
    newAppointment.classList.add('appointments');
    appointments.appendChild(newAppointment);
    if (newAppointment.innerHTML === '') {
      alert('Erro')
    }
  }

  btnInput.addEventListener('click', function () {
    createInput();
  });

  inputText.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      createInput();
    }
  })


}
addAppointment();