interface ArticlesPageProps {
  state: Articles.Ok;
}

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  return {
    props: {
      state: {
        is: 'ok',
        articles: await getArticles('en', 'Accepted'),
      },
    },
  };
};

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  const state = useStoreSync(useAnyZustandStore, anyServerStateToSync)();

  console.log(state); // Prints state from server.

  return (
    <AnyOtherComponentWithStoreUsedIsSafeNow />
  )
};
