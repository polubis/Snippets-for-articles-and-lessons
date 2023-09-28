// The "articles" are: [{ id: 0, name: 'smth', content: '' }].
const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  // We dispatched an action.
  articles_actions.sync(articles);

  // For reading store data.
  const articlesStore = useArticlesStore();

  // Our articles are the one passed from server props!
  console.log(articlesStore.articles);

  return (
    // In JSX code we'll have articles from server
    // and "articlesStore" will be in following state 
    // { "is": "ok", articles: "[{ id: 0, name: 'smth', content: '' }]" }
    // on first render!
  )
};
