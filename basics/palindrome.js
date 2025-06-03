// WAF to check if the given number is palindrome
// num = 121 --> rev : 121 --> Yes
// num = -121 --> rev : 121- --> NO

function isPalindrome(num) {
  // creating a copy of original number
  let numCopy = num;

  // if the number is negative i.e less than 0
  if (num < 0) return false;

  // creating a rev variable with initial 0 value
  let rev = 0;

  while (num > 0) {
    // getting the remainder of the number
    let rem = num % 10;
    // adding it to rev variable
    rev = 10 * rev + rem;
    // getting rid of last digit of number
    num = Math.floor(num / 10);
  }

  // checking if the given number and rev number are equal
  return rev === numCopy;
}

// test the function

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(456)); // false
