/**
xxxx*
xxx**
xx***
x****
*****
 */

let n = 5;

// outer loop for rows
for (let i = 0; i < n; i++) {
  let row = "";

  // this loops is for adding x or empty spaces to the row variable
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + "x";
  }

  // this loop is to take the row variable with empty spaces and then
  //  add * to it
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}
