const ParentView = () => {
  // The context similar to the one from previous examples.
  const articlesContext = useArticlesProvider()
  // Loads articles via http.
  const { articles, loaded } = useArticles()

  useEffect(() => {
    // 💢 It will cause additional re-render.
    // 💢 Dirty "useEffect" just to set the state...
    if (loaded && !articlesContext.articles) {
      articlesContext.setArticles(articles)
    }
  }, [loaded, articles, articlesContext])
}

const App = () => {
  return (
    <ArticlesProvider>
      <ParentView />
    </ArticlesProvider>
  )
}
