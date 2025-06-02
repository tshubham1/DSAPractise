// *
// **
// ***
// ****

//  DO the dry run with i and j values to see how its related
//  at last just print the stars in the inner loop

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
