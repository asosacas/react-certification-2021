import React, { useState, useEffect } from 'react';
import api from 'api';
import { useGlobalState } from 'providers/GlobalStateProvider';
import VideoGrid from 'components/VideoGrid';

const HomeVideoGrid = () => {
  const [results, setResults] = useState({ items: [] });
  const {
    state: { searchValue },
  } = useGlobalState();

  useEffect(() => {
    // If there's no search, let's load wizeline once to have something to show
    api.searchVideos(searchValue || 'wizeline').then((searchResults) => {
      setResults(searchResults);
    });
  }, [searchValue]);

  const videoHandler = async ({ videoId, setMainSelectedVideo }) => {
    const video = await api.getVideoById(videoId);
    if (video) {
      setMainSelectedVideo(video);
      return true;
    }
    return false;
  };

  return (
    <>
      <VideoGrid
        items={results.items}
        basePath="/home"
        relatedMode="api"
        videoHandler={videoHandler}
      />
    </>
  );
};

export default HomeVideoGrid;
