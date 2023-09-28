const ArticlesPage = () => {
  console.log('Hi from ArticlesPage.');

  return <div>{console.log('Hi from JSX inside.')}</div>;
};

<ArticlesPage />;

// The order of logs:
// 1. "Hi from ArticlesPage."
// 2. "Hi from JSX inside."
