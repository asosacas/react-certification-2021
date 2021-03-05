import React from 'react';
import VideoGrid from 'components/VideoGrid';

const HomePage = ({ search }) => {
  return (
    <>
      <VideoGrid search={search} />
    </>
  );
};

export default HomePage;
