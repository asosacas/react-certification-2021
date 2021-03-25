import React from 'react';
import HomeVideoGrid from 'components/HomeVideoGrid';
import { HomeHeader } from './Home.styled';

const HomePage = () => {
  return (
    <>
      <HomeHeader>Home</HomeHeader>
      <HomeVideoGrid />
    </>
  );
};

export default HomePage;
