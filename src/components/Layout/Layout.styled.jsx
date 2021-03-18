import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.fontColor};
`;
