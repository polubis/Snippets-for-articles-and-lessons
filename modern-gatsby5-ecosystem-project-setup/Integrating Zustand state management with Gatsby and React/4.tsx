import React from 'react';

const HomeView: React.FC = () => {
  const title = 'My Title';
  
  return (
    <h1 className="text-3xl top-5 font-bold underline">
      This is home page. Zustand works! The blog title is:
      {title}
    </h1>
  );
};

export default HomeView;
