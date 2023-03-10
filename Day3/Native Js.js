// Using Native JS
function Shape(width, height) {
  this.width = width
  this.height = height
}
Shape.prototype.Area = function () {
  return this.width * this.height
}
Shape.prototype.Premiter = function () {
  return 2 * (this.width + this.height)
}
Shape.prototype.toString = function () {
  return `Width: ${this.width} || Height: ${
    this.height
  } || Area: ${this.Area()} Preimter: ${this.Premiter()}`
}

function Rectangle(width, height) {
  Shape.call(this, width, height)
}
Rectangle.prototype = Object.create(Shape.prototype)

function Square(para) {
  Shape.call(this, para, para)
}
Square.prototype = Object.create(Shape.prototype)

function Circle(para) {
  if (Circle.objectCounter == undefined) {
    Circle.objectCounter = 1
  } else {
    Circle.objectCounter++
  }
  Shape.call(this, para, para)
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.Area = function () {
  return Math.round(Math.PI * this.width * this.height)
}
Circle.prototype.Premiter = function () {
  return Math.round(2 * Math.PI * this.width)
}

var Rec1 = new Rectangle(5, 6)
var Sqr1 = new Square(5)
var Cir1 = new Circle(6)
var Cir2 = new Circle(8)
console.log(Rec1)
console.log(Sqr1)
console.log(Cir1)
console.log(Rec1.toString())
console.log(Sqr1.toString())
console.log(Cir1.toString())
console.log(Circle.objectCounter)
