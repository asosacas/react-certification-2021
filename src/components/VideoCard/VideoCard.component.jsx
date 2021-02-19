import React from 'react';

import { StyledCard } from './VideoCard.styled';

const VideoCard = ({
  data: {
    snippet: { thumbnails, title, description },
  },
}) => {
  return (
    <StyledCard>
      <StyledCard.Thumbnail src={thumbnails.medium.url} alt="" />
      <StyledCard.Title>{title}</StyledCard.Title>
      <StyledCard.Description>{description}</StyledCard.Description>
    </StyledCard>
  );
};

export default VideoCard;
