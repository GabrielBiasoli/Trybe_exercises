const { question } = require('readline-sync');

const script = question(`1.imc
2.velocidade
3.sorteio
4.fatorial
5.fibonacci
`
)

const callScript = {
  1: () => require('./imc'),
  2: () => require('./velocidade'),
  3: () => require('./sorteio'),
  4: () => require('./fatorial'),
  5: () => require('./fibonacci'),
}

callScript[script]()
