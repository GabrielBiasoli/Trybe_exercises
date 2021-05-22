let n = 15;
let x = "";


let n2 = Math.ceil(n / 2);
let p3 = n2 - 1;
let p4 = n2 - 1;


if (n % 2 != 0) {

  for (let i2 = 0; i2 < n2; i2 += 1) {


    for (let i = 0; i < n; i += 1) {


      if ((i == p3) || (i == p4) || (i2 == n2 - 1)) {
        x += "*";
      } else {
        x += " ";
      }


    }

    console.log(x);
    x = "";
    p3 -= 1;
    p4 += 1;
  }





}
else {
  console.log("Only odd numbers are allowed! Try again.");
}
