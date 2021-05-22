let n = 9;
let b = "";



for (let i2 = 0; i2 < n; i2 += 1) {

  for (let i = 0; i < n; i += 1) {


    if (b.length + 1 >= n - i2) {
      b += "*";

    } else {
      b += " ";
    }



  }
  console.log(b);
  b = "";
}


