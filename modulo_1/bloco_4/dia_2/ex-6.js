let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x = 0;

for (let index = 0; index < numbers.length; index += 1) {

  if (numbers[index] % 2 != 0) {
    x += 1;
  }
}
if (x > 0) {
  console.log("Existem", x, "valores ímpares");
} else {
  console.log("nenhum valor ímpar encontrado");
}