import React from 'react';
import InputText from 'ui/InputText';
import { FaBars, FaUserCircle, FaSun } from 'react-icons/fa';
import { StyledNavBar } from './Header.styled';

const Header = () => (
  <StyledNavBar>
    <StyledNavBar.Left>
      <FaBars />
      <InputText />
    </StyledNavBar.Left>
    <StyledNavBar.Right>
      <FaSun />
      <FaUserCircle />
    </StyledNavBar.Right>
  </StyledNavBar>
);

export default Header;
