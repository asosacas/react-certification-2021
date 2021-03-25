import React from 'react';
import { useGlobalState } from 'providers/GlobalStateProvider';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';
import { StarContainer } from './FavoriteStar.styled';

const FavoriteStar = ({ selectedVideo, className }) => {
  const { dispatch, isFavorite } = useGlobalState();
  if (!selectedVideo) {
    return null;
  }
  return (
    <StarContainer className={className}>
      {isFavorite(selectedVideo.id.videoId) ? (
        <FaStar
          className="favorite-on"
          onClick={(ev) => {
            dispatch({ type: 'removeFromFavorites', value: selectedVideo.id.videoId });
            ev.stopPropagation();
          }}
        />
      ) : (
        <FaRegStar
          className="favorite-off"
          onClick={(ev) => {
            dispatch({ type: 'addToFavorites', value: selectedVideo });
            ev.stopPropagation();
          }}
        />
      )}
    </StarContainer>
  );
};

export default styled(FavoriteStar)``;
