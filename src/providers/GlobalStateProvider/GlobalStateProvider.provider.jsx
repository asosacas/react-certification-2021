import React, { useContext } from 'react';

const GlobalContext = React.createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'setSearch': {
      return { ...state, searchValue: action.value };
    }
    case 'updateTheme': {
      return { ...state, theme: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const GlobalStateProvider = ({ children, ...props }) => {
  const [state, dispatch] = React.useReducer(globalReducer, {
    searchValue: '',
    theme: 'light',
  });
  const value = { state, dispatch };
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
