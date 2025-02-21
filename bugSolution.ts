function compare(a: number, b: number): number | boolean {
  if (isNaN(a) || isNaN(b)) {
    return false; // Indicate NaN values are not comparable
  } else if (a < b) {
    return -1; 
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(2, 2)); // Output: 0
console.log(compare(NaN, NaN)); // Output: false
console.log(compare(NaN, 1)); // Output: false
console.log(compare(1, NaN)); // Output: false