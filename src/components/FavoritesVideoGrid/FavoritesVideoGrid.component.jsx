import React from 'react';
import { useGlobalState } from 'providers/GlobalStateProvider';
import VideoGrid from 'components/VideoGrid';

const FavoritesVideoGrid = () => {
  const {
    state: { favorites },
  } = useGlobalState();

  const videoHandler = async ({ videoId, items, setMainSelectedVideo }) => {
    const matchingVideo = items.filter((_video) => _video.id.videoId === videoId);
    if (matchingVideo.length) {
      setMainSelectedVideo(matchingVideo[0]);
      return true;
    }
    return false;
  };

  return (
    <>
      <VideoGrid
        items={favorites}
        relatedMode="favorites"
        basePath="/favorites"
        videoHandler={videoHandler}
      />
    </>
  );
};

export default FavoritesVideoGrid;
