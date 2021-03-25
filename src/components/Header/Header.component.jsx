import React, { useState } from 'react';
import InputText from 'ui/InputText';
import { FaHome, FaStar, FaSun, FaMoon } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from 'providers/GlobalStateProvider';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledNavBar } from './Header.styled';

const ThemeIconMap = {
  light: FaSun,
  dark: FaMoon,
};

const Header = () => {
  const [tempSearch, setTempSearch] = useState('');
  const history = useHistory();
  const { loginWithRedirect, logout } = useAuth0();
  const {
    state: { theme },
    dispatch,
    isAuthenticated,
  } = useGlobalState();
  const onSubmit = (ev) => {
    dispatch({ type: 'setSearch', value: tempSearch });
    history.push('/');
    ev.preventDefault();
  };
  return (
    <StyledNavBar>
      <StyledNavBar.Left>
        <StyledNavBar.Link to="/home">
          <FaHome />
        </StyledNavBar.Link>
        {isAuthenticated && (
          <StyledNavBar.Link to="/favorites">
            <FaStar />
          </StyledNavBar.Link>
        )}
        <form onSubmit={onSubmit}>
          <InputText onChange={(e) => setTempSearch(e.target.value)} value={tempSearch} />
        </form>
      </StyledNavBar.Left>
      <StyledNavBar.Right>
        <StyledNavBar.ThemeSwitch
          onClick={() =>
            dispatch({
              type: 'updateTheme',
              value: theme === 'light' ? 'dark' : 'light',
            })
          }
        >
          {React.createElement(ThemeIconMap[theme])}
        </StyledNavBar.ThemeSwitch>
        <StyledNavBar.AuthButton
          type="button"
          onClick={() =>
            isAuthenticated
              ? logout({ returnTo: `${window.location.origin}` })
              : loginWithRedirect()
          }
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </StyledNavBar.AuthButton>
      </StyledNavBar.Right>
    </StyledNavBar>
  );
};

export default Header;
