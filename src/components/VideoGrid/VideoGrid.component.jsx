import React, { useState, useEffect } from 'react';
import VideoCard from 'components/VideoCard';
import VideoDetail from 'components/VideoDetail';
import api from 'api';
import { StyledGrid } from './VideoGrid.styled';

const VideoGrid = ({ search }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [results, setResults] = useState({ items: [] });

  useEffect(() => {
    // If there's no search, let's load wizeline once to have something to show
    api.searchVideos(search || 'wizeline').then((searchResults) => {
      setResults(searchResults);
    });
  }, [search]);

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
