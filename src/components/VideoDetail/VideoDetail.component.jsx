import React from 'react';
import useVideoDetails from 'hooks/videoDetails';
import useResetScroll from 'hooks/resetScroll';
import SanitizedHTML from 'ui/SanitizedHTML';
import { StyledOverlay } from './VideoDetail.styled';
import VideoCarrousel from '../VideoCarrousel';

const VideoDetail = ({ selectedVideo, setSelectedVideo }) => {
  const containerRef = useResetScroll();
  const { title, description, publishTime, relatedVideos } = useVideoDetails(
    selectedVideo
  );
  const closeVideo = () => setSelectedVideo(null);
  if (!selectedVideo) {
    return null;
  }
  return (
    <StyledOverlay onClick={closeVideo}>
      <StyledOverlay.Container ref={containerRef} onClick={(e) => e.stopPropagation()}>
        <StyledOverlay.CloseButton type="button" onClick={closeVideo}>
          X
        </StyledOverlay.CloseButton>
        <StyledOverlay.Title>
          <SanitizedHTML html={title} />
        </StyledOverlay.Title>
        <StyledOverlay.Video
          title={title}
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
        />
        <StyledOverlay.Description>
          <SanitizedHTML html={description} />
        </StyledOverlay.Description>
        <StyledOverlay.PublishTime>Published: {publishTime}</StyledOverlay.PublishTime>
        <StyledOverlay.Title>Similar videos</StyledOverlay.Title>
        <VideoCarrousel
          videoList={relatedVideos?.items}
          setSelectedVideo={setSelectedVideo}
        />
      </StyledOverlay.Container>
    </StyledOverlay>
  );
};

export default VideoDetail;
