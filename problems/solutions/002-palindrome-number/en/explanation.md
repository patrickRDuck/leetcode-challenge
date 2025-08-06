Palindrome is a word, phrase or number that remains the same when read forwards or backwards.

Given this, we need to develop an algortithm that can reverse the paramater x received and compare it with the original. Below the sequence of steps in the function:

1. Negative values cannot be palindromes, so we start the function with a condictional check verify if the input is positive. If not, it immediately returns false.

2. Two variable are created within the function scope, one to store the original value and other to be used in building the reversed value.

3. A loop begins with the condictional that x must be greater than 0. 
    3.1. The loop starts by creating a variable to store the rightmost digit of the number. This digit is obtained mathematically by dividing x by 10 (to shift the decimal point from right to left) and capturing the remainder of the division. 
    3.2. The reverse variable is updated here: the new value is previous value multiplied by 10 (to add a new digit position) plus the digit variable.
    3.3. The variable x, which was initially set to the argument given to the function, is updated. It is now divided by 10 to remove the rightmost digit already captured, and the decimal part of this result is discarded.

4. When we exit the loop, we will have the reverse variable fully built. We can then return the logical result of original === reverse.

