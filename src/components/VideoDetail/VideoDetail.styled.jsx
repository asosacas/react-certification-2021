import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

StyledOverlay.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 80%;
  background-color: white;
  cursor: default;
  padding: 20px;
  overflow-y: auto;
`;

StyledOverlay.Video = styled.iframe`
  min-height: 315px;
  min-width: 420px;
`;

StyledOverlay.CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 20px;
`;
StyledOverlay.Title = styled.div`
  font-size: large;
`;
StyledOverlay.Description = styled.div`
  font-size: small;
  text-align: justify;
  padding: 10px 0;
  white-space: pre-line;
  width: 100%;
`;
StyledOverlay.PublishTime = styled.div`
  font-size: small;
  align-self: flex-start;
`;
