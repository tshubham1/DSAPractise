// WAF to count number of digits present in a number.

function countNumberOfDigits(num) {
  // 1st : corner case if the number is 0
  if (num == 0) return 1;

  // 2nd : handling the negative numbers
  // Math.abs() --> gives the positive value of the number

  num = Math.abs(num);

  let count = 0;
  while (num > 0) {
    // Math.floor() --> help to get rid of decimal values
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let num = 1234;
const result = countNumberOfDigits(num);
console.log(result); // 4

// DRY RUN
/**
 *  num | div by 10 | count
 *  1234 | 123 | 1
 *  123|  12 | 2
 * 12 | 1 | 3
 * 1| 0 | 4
 *
 * loop will end as condition will be false if num = 0
 * final count : 4
 *
 */
