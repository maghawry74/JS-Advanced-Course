//Symbol.iterator For Object && Array
let person = {
  FirstName: "Maghawry",
  LastName: "Hussein",
  Address: "Menofia",
  Gender: "Male",
  [Symbol.iterator]: ObjectIterator,
}
function ObjectIterator() {
  let objectKeys = Object.keys(this)
  self = this
  let j = 0
  return {
    next: function () {
      for (let i = j; i <= objectKeys.length; ) {
        j++
        return i != objectKeys.length
          ? {
              value: `Key : ${objectKeys[i]} Value : ${self[objectKeys[i]]}`,
              done: false,
            }
          : { value: undefined, done: true }
      }
    },
  }
}
function* ObjectIteratorG() {
  for (let i in this) {
    yield `Key: ${i} Value : ${this[i]}`
  }
}
for (let i of person) {
  console.log(i)
}
Array.prototype[Symbol.iterator] = ObjectIteratorG
for (let i of [1, 5, 8, 9, 7, 8, 7]) {
  console.log(i)
}
