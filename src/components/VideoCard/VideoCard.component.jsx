import React from 'react';
import SanitizedHTML from 'ui/SanitizedHTML';
import { StyledCard } from './VideoCard.styled';

const VideoCard = ({ snippet: { thumbnails, title, description }, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCard.Thumbnail src={thumbnails?.medium?.url} alt={title} />
      <StyledCard.Title>
        <SanitizedHTML html={title} />
      </StyledCard.Title>
      <StyledCard.Description>
        <SanitizedHTML html={description} />
      </StyledCard.Description>
    </StyledCard>
  );
};

export default VideoCard;
