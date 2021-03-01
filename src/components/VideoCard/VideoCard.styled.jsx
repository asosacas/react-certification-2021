import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 350px;
  height: 400px;
  border: solid;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.cardBorder};
  box-shadow: 1px 1px 1px ${(props) => props.theme.cardShadow};
  transition: 0.3s;
  text-align: center;
  overflow: hidden;

  :hover {
    box-shadow: 3px 3px 3px ${(props) => props.theme.cardShadow};
  }
`;

StyledCard.Thumbnail = styled.img`
  max-height: 200px;
`;
StyledCard.Title = styled.h3``;
StyledCard.Description = styled.div`
  text-align: justify;
`;
