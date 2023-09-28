const ArticlesPage = ({ state }: ArticlesPageProps) => {
  // Call it only once per store!
  // Call it at the top of the initial page component.
  useStoreSync(useArticlesStore, state)()

  return <AnyOtherComponentWithStoreUsedIsSafeNow />
}
