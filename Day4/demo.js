var a = 5
var b = 6
var [a, b] = [b, a]
console.log(`a : ${a} b: ${b}`)

function minMax(...numbers) {
  let arr = []
  arr.push(Math.max(...numbers))
  arr.push(Math.min(...numbers))
  return arr
}
let [Max, Min] = minMax(50, 90, 7, 2, 9, 100, 0, -2)
console.log(`Minimum : ${Min} Max : ${Max}`)

var fruits = ["apple", "strawberry", "banana", "orange", "mango"]

console.log(fruits.every((item) => typeof item == "string"))
console.log(fruits.some((item) => item.startsWith("a")))

let newarr = fruits.filter(
  (item) => item.startsWith("b") || item.startsWith("s")
)
console.log(newarr)

let newarray = fruits.map((item) => `I love ${item}`)

newarray.forEach((item) => console.log(item))
