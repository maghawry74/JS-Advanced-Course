// Using ES6 Syntaic
class Shape {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  toString() {
    return `Width: ${this.width} || Height: ${
      this.height
    } || Area: ${this.Area()} Preimter: ${this.Premiter()}`
  }
  Area() {
    return this.width * this.height
  }
  Premiter() {
    return 2 * (this.width + this.height)
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }
}
class Square extends Shape {
  constructor(para) {
    super(para, para)
  }
}
class Circle extends Shape {
  static objectCounter = 0
  constructor(para) {
    super(para, para)
    Circle.objectCounter++
  }
  Area() {
    return Math.round(Math.PI * this.width * this.height)
  }
  Premiter() {
    return 2 * (this.width + this.height)
  }
}
Shape.prototype.test = function () {
  return "this is a test function"
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
