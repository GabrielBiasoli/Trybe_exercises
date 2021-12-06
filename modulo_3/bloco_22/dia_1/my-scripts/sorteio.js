const { questionInt, question } = require('readline-sync');

const game = () => {
  const number = Math.floor(Math.random() * 11);
  const hunch = questionInt('Adivinhe o número entre 0 a 10: ');
  const result = number === hunch ? 'Parabéns, número correto!'
  : `Opa, não foi dessa vez. O número era ${ number }`;
  console.log(result);
  const restart = question('Jogar novamente? ');
  if (restart.toLowerCase() === 'sim') return game();
}

game();
