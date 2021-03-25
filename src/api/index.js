const apiUrlBuilder = (endpoint, queryParams) => {
  return `https://www.googleapis.com/youtube/v3/${endpoint}?${new URLSearchParams({
    key: process.env.REACT_APP_GOOGLE_API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 25,
    ...queryParams,
  })}`;
};

export default {
  searchVideos: (searchValue) =>
    fetch(apiUrlBuilder('search', { q: searchValue })).then((response) =>
      response.json()
    ),
  getRelatedVideos: (videoId) =>
    fetch(apiUrlBuilder('search', { relatedToVideoId: videoId })).then((response) =>
      response.json()
    ),
  getVideoById: (videoId) =>
    fetch(apiUrlBuilder('videos', { id: videoId }))
      .then((response) => response.json())
      .then((videoData) => {
        if (videoData.items.length) {
          return { ...videoData.items[0], id: { videoId: videoData.items[0].id } };
        }
        return null;
      }),
};
