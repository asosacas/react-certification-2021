import React from 'react';
import VideoGrid from 'components/VideoGrid';
import api from 'api';

const HomePage = () => {
  return (
    <>
      <VideoGrid data={api.getData()} />
    </>
  );
};

export default HomePage;
