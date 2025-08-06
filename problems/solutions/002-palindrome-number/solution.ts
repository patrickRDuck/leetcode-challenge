function isPalindrome(x: number): boolean {
   if(x < 0) return false

   const original = x
   let reverse = 0

   while (x > 0) {
    const digit = x % 10
    reverse = reverse * 10 + digit
    x = Math.floor(x / 10)
   }

   return original === reverse
}

// Example usage:
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true