import React from 'react';
import FavoritesVideoGrid from 'components/FavoritesVideoGrid';
import { FavoritesHeader } from './Favorites.styled';

const FavoritesPage = () => (
  <>
    <FavoritesHeader>Favorites</FavoritesHeader>
    <FavoritesVideoGrid />
  </>
);
export default FavoritesPage;
