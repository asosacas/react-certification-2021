import React, { useState, useEffect } from 'react';
import VideoCard from 'components/VideoCard';
import VideoDetail from 'components/VideoDetail';
import api from 'api';
import { useGlobalState } from 'providers/GlobalStateProvider';
import { StyledGrid } from './VideoGrid.styled';

const VideoGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  return (
    <>
      <VideoDetail selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
      <StyledGrid>
        {results.items.map((item) => (
          <VideoCard key={item.etag} {...item} onClick={() => setSelectedVideo(item)} />
        ))}
      </StyledGrid>
    </>
  );
};

export default VideoGrid;
