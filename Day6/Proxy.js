// Proxy Task
let obj = { name: "", address: "", age: 0 }
let hanndler = {
  get(target, prop) {
    if (prop in target) return target[prop]
    throw `${prop} is not defined in this object`
  },
  set(target, prop, value) {
    switch (prop) {
      case "name":
        if (value.length == 7 && isNaN(value) == true) {
          target[prop] = value
        } else {
          throw "Name Must be a string with 7 Char Length"
        }
        break
      case "address":
        if (isNaN(value) == true) {
          target[prop] = value
        } else {
          throw "Address Must be String Only"
        }
        break
      case "age":
        if (value >= 25 && value <= 60) {
          target[prop] = value
        } else {
          throw "Age Must Between 25 and 60"
        }
        break
      default:
        throw `${prop} is not defined in this object`
    }
  },
}
