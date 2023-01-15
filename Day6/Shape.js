export class Shape {
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
