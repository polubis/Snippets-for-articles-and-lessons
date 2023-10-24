import HomeView from '../views/home/home.view';

const HomePage: React.FC = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <main onClick={() => toggleTheme(theme === `dark` ? `light` : `dark`)}>
          <h1 className="text-3xl top-5 font-bold underline">Hello!</h1>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
          <span className="dark:text-white text-black">Theme test</span>
          <HomeView />
        </main>
      )}
    </ThemeToggler>
  );
};
