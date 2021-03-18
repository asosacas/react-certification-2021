import React, { useState } from 'react';
import InputText from 'ui/InputText';
import { FaBars, FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import { useGlobalState } from 'providers/GlobalStateProvider';
import { StyledNavBar } from './Header.styled';

const ThemeIconMap = {
  light: FaSun,
  dark: FaMoon,
};

const Header = () => {
  const [tempSearch, setTempSearch] = useState('');
  const {
    state: { theme },
    dispatch,
  } = useGlobalState();
  const onSubmit = (ev) => {
    dispatch({ type: 'setSearch', value: tempSearch });
    ev.preventDefault();
  };
  return (
    <StyledNavBar>
      <StyledNavBar.Left>
        <FaBars />
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
        <FaUserCircle />
      </StyledNavBar.Right>
    </StyledNavBar>
  );
};

export default Header;
