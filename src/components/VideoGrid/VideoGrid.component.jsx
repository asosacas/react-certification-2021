import React, { useState, useEffect, useCallback } from 'react';
import VideoCard from 'components/VideoCard';
import VideoDetail from 'components/VideoDetail';
import { useParams, useHistory } from 'react-router-dom';
import { StyledGrid } from './VideoGrid.styled';

const VideoGrid = ({ items, relatedMode, basePath, videoHandler }) => {
  const [selectedVideo, setMainSelectedVideo] = useState(null);
  const { videoId } = useParams();
  const history = useHistory();

  const returnToRoot = useCallback(() => {
    history.push(`${basePath}`);
  }, [history, basePath]);

  useEffect(() => {
    const handleVideoId = async () => {
      if (videoId) {
        const validVideo = await videoHandler({ videoId, items, setMainSelectedVideo });
        if (!validVideo) {
          returnToRoot();
        }
      } else {
        setMainSelectedVideo(null);
      }
    };
    handleVideoId();
  }, [videoId, items, returnToRoot, videoHandler]);

  const updatePath = (_item) => history.push(`${basePath}/${_item.id.videoId}`);

  if (!items) {
    return null;
  }
  return (
    <>
      <VideoDetail
        selectedVideo={selectedVideo}
        setSelectedVideo={updatePath}
        relatedMode={relatedMode}
        onClose={returnToRoot}
      />
      <StyledGrid>
        {items.map((item) => (
          <VideoCard key={item.etag} video={item} onClick={() => updatePath(item)} />
        ))}
      </StyledGrid>
    </>
  );
};

export default VideoGrid;
