let x = 101;

if (x >= 90 && x <= 100) {
  console.log("A");

} else if (x >= 80 && x < 90) {
  console.log("B");

} else if (x >= 70 && x < 80) {
  console.log("C");

} else if (x >= 60 && x < 70) {
  console.log("D");

} else if (x >= 50 && x < 60) {
  console.log("E");

} else if (x < 50 && x >= 0) {
  console.log("F");

} else if (x < 0) {
  console.log("Error. Percentage insufficient");

} else {
  console.log("Error. Precentage too high");
}
