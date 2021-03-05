import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.headerBg};
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.fontColorContrast};
  position: sticky;

  svg {
    height: 30px;
    width: 30px;
  }

  > div {
    display: inline-flex;
    align-items: center;
  }
`;

StyledNavBar.Left = styled.div`
  > * {
    margin-left: 16px;
  }
`;

StyledNavBar.Right = styled.div`
  padding-right: 8px;
  > * {
    margin-right: 16px;
  }
`;
