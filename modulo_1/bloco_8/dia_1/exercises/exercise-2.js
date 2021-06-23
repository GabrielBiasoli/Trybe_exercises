const winChecker = (numberBet, rightNumber) => {
  let result = '';
  numberBet === rightNumber ? result = 'Parabéns você ganhou' : result = 'Tente Novamente';
  return console.log(result, rightNumber)
}


const prizeDraw = (number, func) => {
  const ramdomNumber = Math.ceil(Math.random() * 5);
  return func(number, ramdomNumber);
}

prizeDraw(5, winChecker);