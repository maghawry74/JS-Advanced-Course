//Modules Task
import { Shape } from "./Shape.js"
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }
}
let rect = new Rectangle(5, 6)
console.log(rect.Area())
