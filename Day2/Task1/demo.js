function Shape() {}
Shape.prototype.TestFunction = function () {
  return "this is test Function From Shape Constructor"
}
function Rectangle(_width, _height) {
  if (Rectangle.counter == undefined) {
    Rectangle.counter = 1
  } else {
    Rectangle.counter++
  }
  var height = _height
  var width = _width
  Object.defineProperty(this, "height", {
    set(value) {
      height = value
      console.log("height set methode")
    },
    get() {
      return height
    },
  })
  Object.defineProperty(this, "width", {
    set(value) {
      width = value
    },
    get() {
      return width
    },
  })
}
// Rectangle.prototype.__proto__ = Shape.prototype
Object.setPrototypeOf(Rectangle.prototype, Shape.prototype)
Rectangle.prototype.Area = function () {
  return this.height * this.width
}
Rectangle.prototype.Perimter = function () {
  return 2 * (this.height + this.width)
}
Rectangle.prototype.toString = function () {
  return `Height = ${this.height} || Width = ${
    this.width
  } || Area = ${this.Area()} || Premiter = ${this.Perimter()}`
}
