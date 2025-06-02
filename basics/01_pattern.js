// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;

// i -> responsible for number of rows
// j -> responsible for number of columns
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "* ";
  }
  console.log(row);
}
