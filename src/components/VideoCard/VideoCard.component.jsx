import React from 'react';
import SanitizedHTML from 'ui/SanitizedHTML';
import FavoriteStar from 'components/FavoriteStar';
import { StyledCard } from './VideoCard.styled';

const VideoCard = ({ video, ...props }) => {
  const {
    snippet: { thumbnails, title, description },
  } = video;
  return (
    <StyledCard {...props}>
      <FavoriteStar selectedVideo={video} />
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
