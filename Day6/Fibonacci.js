//Generator Fibonacci Task
var FibonacciGenerator = function* (num) {
  if (num <= 0) throw "Number Must Be Larger Than Zero"
  var prev = 0
  var next = 1
  for (let i = 0; i < num; i++) {
    yield prev
    ;[prev, next] = [next, prev + next]
  }
  return
}
var Fibonacci = FibonacciGenerator(15)
for (let i = 0; i < 15; i++) {
  console.log(Fibonacci.next().value)
}
console.log("\n\n")
var FibonacciGenerator = function* (num) {
  if (num < 0) throw "Number Must Be Larger Than Zero"
  var prev = 0
  var next = 1
  while (true) {
    if (prev > num) {
      return
    }
    yield prev
    ;[prev, next] = [next, prev + next]
  }
}
var Fibonacci = FibonacciGenerator(378)
for (let i = 0; i < 15; i++) {
  console.log(Fibonacci.next().value)
}
