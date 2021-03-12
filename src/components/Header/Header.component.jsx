import React, { useState } from 'react';
import InputText from 'ui/InputText';
import { FaBars, FaUserCircle, FaSun } from 'react-icons/fa';
import { StyledNavBar } from './Header.styled';

const Header = ({ setSearch }) => {
  const [tempSearch, setTempSearch] = useState();
  const onSubmit = (ev) => {
    setSearch(tempSearch);
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
        <FaSun />
        <FaUserCircle />
      </StyledNavBar.Right>
    </StyledNavBar>
  );
};

export default Header;
