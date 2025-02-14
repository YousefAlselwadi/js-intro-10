// Big O Notation: O(n)

// 1. Fibonacci series
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 2. Most repeated item in an array
// Example: [1, 2, 3, 4, 2, 2, 3, 1, 4, 4, 4] -> 4

// 3. Bonus: product of array
// Example: [1, 2, 3, 4] -> 24