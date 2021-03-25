import React from 'react';
import useResetScroll from 'hooks/resetScroll';
import SanitizedHTML from 'ui/SanitizedHTML';
import { StyledCarrousel } from './VideoCarrousel.styled';

const VideoCarrousel = ({ videoList, setSelectedVideo }) => {
  const sliderRef = useResetScroll(videoList);
  if (!videoList) {
    return null;
  }

  return (
    <StyledCarrousel>
      <StyledCarrousel.Slider ref={sliderRef}>
        {videoList.map((item) => {
          const {
            snippet: { title, thumbnails },
            id: { videoId },
          } = item;
          return (
            <StyledCarrousel.Video key={videoId} onClick={() => setSelectedVideo(item)}>
              <StyledCarrousel.Thumbnail src={thumbnails?.medium?.url} alt={title} />
              <StyledCarrousel.Title>
                <SanitizedHTML html={title} />
              </StyledCarrousel.Title>
            </StyledCarrousel.Video>
          );
        })}
      </StyledCarrousel.Slider>
    </StyledCarrousel>
  );
};

export default VideoCarrousel;
