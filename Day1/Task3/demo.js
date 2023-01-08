function fun1(...para) {
  if (para.length != 2) {
    throw "Invalid number of paramters"
  }
}
function add(...para) {
  if (para.length == 0) {
    throw "No Paramters"
  }
  var sum = 0
  for (var i = 0; i < para.length; i++) {
    if (typeof para[i] != "number") {
      throw "Must Enter Numbers Only"
    }
    sum += para[i]
  }
  return sum
}

function reverseOne(...para) {
  return para.reverse()
}
function reverseTwo(...para) {
  var arr = []
  for (var i = para.length - 1; i >= 0; i--) {
    arr.push(para[i])
  }
  return arr
}
