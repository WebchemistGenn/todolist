import React from "react";
import styled from "styled-components";


const InputTxt = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
`


const Input = (props) => {
  return <InputTxt  {...props} />
}

export default Input