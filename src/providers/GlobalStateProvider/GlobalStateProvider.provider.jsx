import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const GlobalContext = React.createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'setSearch': {
      return { ...state, searchValue: action.value };
    }
    case 'updateTheme': {
      return { ...state, theme: action.value };
    }
    case 'addToFavorites': {
      const newState = { ...state, favorites: [...state.favorites, action.value] };
      localStorage.setItem('favorite_videos', JSON.stringify(newState.favorites));
      return newState;
    }
    case 'removeFromFavorites': {
      const newState = {
        ...state,
        favorites: state.favorites.filter((video) => video.id.videoId !== action.value),
      };
      localStorage.setItem('favorite_videos', JSON.stringify(newState.favorites));
      return newState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const GlobalStateProvider = ({ children, ...props }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [state, dispatch] = React.useReducer(globalReducer, {
    searchValue: '',
    theme: 'light',
    favorites: JSON.parse(localStorage.getItem('favorite_videos')) || [],
  });
  const isFavorite = (videoId) => {
    return !!state.favorites.filter((video) => video.id.videoId === videoId).length;
  };
  const value = { state, dispatch, isAuthenticated, isLoading, isFavorite };

  return (
    <GlobalContext.Provider value={value} {...props}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalState is used outside of the GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
