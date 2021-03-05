import React from 'react';

import { StyledDivInput } from './InputText.styled';

const InputText = (props) => {
  return (
    <StyledDivInput>
      <input type="text" {...props} onChange={(e) => props.onChange(e.target.value)} />
    </StyledDivInput>
  );
};

export default InputText;
