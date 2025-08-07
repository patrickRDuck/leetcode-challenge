The question asks us to find two intengers numbers in a list whose sum results in the given target value, and return the index of each.

1. Thus, we start the function by establishing one variable that should be a map, which will serve to store the relationship between the value and the index of the list element.

2. we'll create a 'for' loop with a counter i whoose condition is to be less than the length of the list; this counter will serve as the index of the list at each interation.
    2.1. The looping starts by creating a variable that stores the difference between the element at current index and the target value, this constant will be called complement.
    2.2. Next, a conditional should be made to check if the value of complement has already been stored in the map; if has, an array will be returned containing the current index and the index of the value found in the map with the complement.
    2.3  If the conditional is not satisfied, the element’s value and the current index will be stored in the map.

3. If the algorithm exits the loop without a return, it means there are no two values in the list whose sum results in the target value. In this case, we should throw an error to communicate this fact.
