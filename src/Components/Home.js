import React from 'react';

const Home = ({ message = 'hi' })=> {
  return (
    <h1>{ message }</h1>
  );
};

export default Home;
