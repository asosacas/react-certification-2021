import { useState, useEffect } from 'react';
import api from 'api';

const useVideoDetails = (video) => {
  const [relatedVideos, setRelatedVideos] = useState(null);
  useEffect(() => {
    if (video) {
      api.getRelatedVideos(video?.id?.videoId).then(setRelatedVideos);
    }
  }, [video]);
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
