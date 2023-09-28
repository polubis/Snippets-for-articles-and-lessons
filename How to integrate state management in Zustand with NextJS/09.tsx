interface ArticlesPageProps {
  state: Articles.Ok
}

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  return {
    props: {
      state: {
        is: "ok",
        articles: await getArticles("en", "Accepted"),
      },
    },
  }
}

const ArticlesPage = ({ state }: ArticlesPageProps) => {
  useStoreSync(useArticlesStore, state)()

  // Prints state that is synced now!
  console.log(state)

  return <AnyOtherComponentWithStoreUsedIsSafeNow />
}
