import type { ReactNode } from "react"

interface MyContextProviderProps {
  children: ReactNode
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  // 💚 Any component may be passed!
  return <MyContext value={value}>{children}</MyContext>
}
