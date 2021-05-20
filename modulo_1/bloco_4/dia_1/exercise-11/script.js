
let grossSalary = 4000;
let baseSalary = null;
let netSalary = null;
let ir = null;


if (grossSalary <= 1556.94 && grossSalary > 0) {
  baseSalary = grossSalary - grossSalary * 0.09;

} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  baseSalary = grossSalary - grossSalary * 0.09;

} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  baseSalary = grossSalary - grossSalary * 0.11;

} else if (grossSalary > 5189.82) {
  baseSalary = grossSalary - 570.88;

} else {
  console.log("Salary insufficient");
}

if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  ir = (baseSalary * 0.075) - 142.8
  netSalary = baseSalary - ir;

} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  ir = (baseSalary * 0.15) - 354.8
  netSalary = baseSalary - ir;

} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  ir = (baseSalary * 0.225) - 636.13
  netSalary = baseSalary - ir;

} else if (baseSalary > 4664.68) {
  ir = (baseSalary * 0.275) - 869.36
  netSalary = baseSalary - ir;

}

console.log("Net Salary is " + netSalary);