// Polymorphic interface
interface Shape {
  calculateArea(): number;
}
 
// Concrete implementations
class Circle implements Shape {
  constructor(private radius: number) {}
 
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
 
class Square implements Shape {
  constructor(private sideLength: number) {}
 
  calculateArea(): number {
    return this.sideLength ** 2;
  }
}
 
// Function using polymorphism
function printArea(shape: Shape): void {
  console.log(\`Area: \${shape.calculateArea()}\`);
}
 
// Using polymorphic function
const circle: Shape = new Circle(5); // 💚
const square: Shape = new Square(4); // 💚
 
printArea(circle); // Output: Area: 78.54
printArea(square); // Output: Area: 16
