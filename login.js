let shiva=["shyam","rohan","sanju","tarun"];

let count = 0

for (let i = 0; i <= shiva.length - 1; i++) {
  for (let j = 0; j <= shiva[i].length - 1; j++) {
    if (shiva[i][j] == "s"){
      count++
    }
  }
}
console.log(count)