export default async function ArticlesPage() {
  const articles = await getArticles("en", "Accepted"),

  useStoreSync(useArticlesStore, { is: 'ok', articles })()
    
  return <AnyOtherClientOnlyComponent />
}
