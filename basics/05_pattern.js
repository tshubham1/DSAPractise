// 12345
// 1234
// 123
// 12
// 1

/**
 * Logic :
 * n = 5
 *
 * DRY RUN :
 * i | j          Pattern identified
 * 0 | 5 times    (n - i) -> (5 - 0) = 5 times
 * 1 | 4 times    (n - i) -> (5 - 1) = 4 times
 * 2 | 3 times
 * 3 | 2 times
 * 4 | 1 times
 *
 */

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
