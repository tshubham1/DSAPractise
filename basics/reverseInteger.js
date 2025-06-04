/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2**32, 2**31 - 1], then return 0.
 *
 * Link : https://leetcode.com/problems/reverse-integer/description/
 */

function reverseInteger(num) {
  // creating a copy of original num
  let numCopy = num;

  // Handling negative number case.
  num = Math.abs(num);

  let rev = 0;

  while (num > 0) {
    let rem = num % 10; // getting the remainder value i.e last digit
    rev = 10 * rev + rem; // adding the last digit to rev variable
    num = Math.floor(num / 10); // getting rid of last digit
  }

  // Handling the corner case for limit on number provided
  let limit = Math.pow(2, 31);

  // if rev is under limit or not
  if (rev < -limit || rev > limit) return 0;

  // if number is greater than 0 then return rev else - rev
  return numCopy > 0 ? rev : -rev;
}

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(989876789083)); // 0
