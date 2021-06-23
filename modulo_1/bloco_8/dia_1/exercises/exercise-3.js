const scoreChecker = (rightAnswers, answers) => {
  let score = 0;
  for (let i = 0; i < rightAnswers.length; i+= 1) {
    if(answers[i] === rightAnswers[i]){
      score += 1 
    } else if( answers[i] === 'N.A') {
      score = score;
    } else {
      score -= 0.5;
    }
  }
  return console.log(score);
}

const testScore = (rightAnswers, answers, func) => {
  const scoreChecker = func(rightAnswers, answers);
  return scoreChecker;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
testScore(rightAnswers, studentAnswers, scoreChecker);