import React from 'react';

import { StyledDivInput } from './InputText.styled';

const InputText = (props) => {
  return (
    <StyledDivInput>
      <input type="text" {...props} />
    </StyledDivInput>
  );
};

export default InputText;
