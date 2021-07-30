import React from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="grid place-items-center h-screen bg-gray-900">
        <h1 className="text-4xl text-white font-bold">Hello, World!</h1>
      </div>
    </>
  );
};

export default Home;
