let numbers: number[] = [1, 2, 3]
// Covariant assignment
let values: (number | string)[] = numbers // Covariant position

function getNumbers(): number[] {
  return [1, 2, 3]
}
// Covariant assignment
let values: (number | string)[] = getNumbers() // Covariant position
