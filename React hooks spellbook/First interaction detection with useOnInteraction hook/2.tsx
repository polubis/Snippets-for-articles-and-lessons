const MyComponent = () => {
  const interacted = useOnInteraction();
 
  React.useEffect(() => {
    if (interacted) {
      console.log('Do what you need');
    }
  }, [interacted]);
 
  return interacted ? (
    <React.Suspense>
      <YourLazyComponent />
    </React.Suspense>
  ) : null;
};
