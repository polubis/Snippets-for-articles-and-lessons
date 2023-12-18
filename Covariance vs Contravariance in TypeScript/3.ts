// Covariant assignment with generics
class Box<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }
}

let boxNumber: Box<number> = new Box<number>(42)
// Covariant assignment
let boxAny: Box<any> = boxNumber // Covariant position
