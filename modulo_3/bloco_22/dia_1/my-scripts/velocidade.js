const { questionInt, questionFloat } = require('readline-sync');

const raceTime = questionInt('Qual foi a duração da corrida(seg)? ');
const distance = questionFloat('Qual a distância percorrida(metros)?');

console.log(`Velocidade média: ${(distance / raceTime).toFixed(2)} m/s`);