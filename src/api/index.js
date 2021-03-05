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
  searchVideos: (searchValue) => {
    return fetch(apiUrlBuilder('search', { q: searchValue })).then((response) =>
      response.json()
    );
  },
  getRelatedVideos: (videoId) => {
    return fetch(
      apiUrlBuilder('search', { relatedToVideoId: videoId })
    ).then((response) => response.json());
  },
};
