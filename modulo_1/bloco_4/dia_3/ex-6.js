let n = 6;
let result = 0;

for (let i = 2; i < n; i++) {

  if (n % i == 0) {
    result += 1;
  }
}

if (result > 0) {
  console.log("O número informado não é primo");
} else {
  console.log("O número é prmio");
}