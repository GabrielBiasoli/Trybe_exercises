let x = 0;
let y = 90;
let z = 90;
let result = true;

if (x <= 0 || y <= 0 || z <= 0) {
  console.log("ângulo inválido");
} else {
  if (x + y + z == 180) {
    console.log(result);
  } else {
    result = false;
    console.log(result);
  }
}
