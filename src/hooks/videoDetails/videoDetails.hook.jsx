import { useState, useEffect } from 'react';
import { useGlobalState } from 'providers/GlobalStateProvider';
import api from 'api';

const useVideoDetails = (video, relatedMode) => {
  const [relatedVideos, setRelatedVideos] = useState(null);
  const {
    state: { favorites },
  } = useGlobalState();
  useEffect(() => {
    if (video && relatedMode === 'api') {
      api.getRelatedVideos(video?.id?.videoId).then(setRelatedVideos);
    }
  }, [video, relatedMode]);

  useEffect(() => {
    if (video && relatedMode === 'favorites') {
      setRelatedVideos({
        items: favorites.filter((_video) => _video.id.videoId !== video?.id?.videoId),
      });
    }
  }, [video, relatedMode, favorites]);
  if (!video) {
    return {};
  }
  const { title, description, publishTime } = video.snippet;
  return {
    title,
    description,
    publishTime,
    relatedVideos,
    isLoading: !!relatedVideos,
  };
};

export default useVideoDetails;
