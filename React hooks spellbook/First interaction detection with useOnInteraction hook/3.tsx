import React from 'react';
 
const useOnInteraction = () => {
  const [interacted, setInteracted] = React.useState(false);
 
  React.useEffect(() => {
    // If interacted, we will skip adding events.
    if (interacted) return;
    // Function to update the state.
    const listener = (): void => {
      setInteracted(true);
    };
    // Events attachment.
    window.addEventListener(`mousemove`, listener);
    window.addEventListener(`touchstart`, listener);
 
    return () => {
      // Events removal.
      window.removeEventListener(`touchstart`, listener);
      window.removeEventListener(`mousemove`, listener);
    };
  }, [interacted]);
 
  return interacted;
};
 
export { useOnInteraction };
