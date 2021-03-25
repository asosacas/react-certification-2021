import styled from 'styled-components';
import FavoriteStar from 'components/FavoriteStar';

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
  cursor: pointer;
  ${FavoriteStar} {
    margin-left: 20px;
    margin-top: 5px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    font-size: x-large;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    background-color: white;
    .favorite-off {
      color: black;
    }
  }
  :hover {
    box-shadow: 3px 3px 3px ${(props) => props.theme.cardShadow};
    ${FavoriteStar} {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.3s linear;
    }
  }
`;

StyledCard.Thumbnail = styled.img`
  max-height: 200px;
`;
StyledCard.Title = styled.h3``;
StyledCard.Description = styled.div`
  text-align: justify;
`;
