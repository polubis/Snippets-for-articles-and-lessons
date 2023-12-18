type IsCovariant<A, B> = A extends B ? true : false

// Example usage
type NumbersCovariant = IsCovariant<number, any> // true
type ArrayCovariant = IsCovariant<number[], any[]> // true
type FunctionCovariant = IsCovariant<() => number, () => any> // true

type NotCovariant = IsCovariant<number, string> // false
