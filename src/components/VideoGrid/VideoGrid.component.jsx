import React from 'react';
import VideoCard from 'components/VideoCard';
import { StyledGrid } from './VideoGrid.styled';

const VideoGrid = ({ data: { items } }) => (
  <StyledGrid>
    {items.map((item) => (
      <VideoCard key={item.etag} data={item} />
    ))}
  </StyledGrid>
);

export default VideoGrid;
