
let n = [2, 9, 6, 8, 3, 4, 1, 5];
let result = [];

for (let y = 1; y < n.length; y += 1) {

  for (let z = 0; z < n - y; z += 1) {

    if (n[y] > n[z]) {
      let aux = n[z];
      n[z] = n[z + 1];
      n[z + 1] = aux;
    }
  }
  result.unshift(n[n.length - y]);
  console.log(result);
}

