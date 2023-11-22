interface MyState {
  pending: boolean
  error: null | string
  setPending(pending: boolean): void
  setError(error: string | null): void
}

// 💢 This is ultra bad!
const MyContext = createContext<MyState>({
  pending: false,
  error: null,
  setPending: () => {},
  setError: () => {},
})
