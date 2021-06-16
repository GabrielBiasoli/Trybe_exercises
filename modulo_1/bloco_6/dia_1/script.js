function states() {
  let brazilStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Paraná', 'Paraíba', 'Pará', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
  let stateInsert = document.getElementById('state');

  for (const element of brazilStates) {
    let option = document.createElement('option');
    option.innerHTML = element;
    stateInsert.append(option);
  }
}
states();

function validateElements() {
  let dateInput = document.getElementById('date');
  if (dateInput.innerText) {

  }
}
validateElements();

function btnSubmit() {
  let submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();


  })
}
btnSubmit();