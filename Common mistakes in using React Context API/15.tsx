interface Article {
  id: number
}

interface ArticlesProviderProps {
  // New property to pass.
  initialState?: Article[]
  children: ReactNode
}

const ArticlesProvider = ({
  initialState = [], // Default initial state.
  children,
}: ArticlesProvider) => {
  const [state, setState] = useState(initialState)
  // ...The rest code from other examples
}

const ParentView = () => {
  // 💚 No additional logic required!
  const articlesContext = useArticlesProvider()
}

const App = () => {
  // Check in single place without "useEffect".
  const { articles, loaded } = useArticles()

  if (loaded)
    return (
      <ArticlesProvider initialState={articles}>
        <ParentView />
      </ArticlesProvider>
    )

  return null
}
