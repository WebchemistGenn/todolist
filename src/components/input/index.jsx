import React from "react";
import styled from "styled-components";


const InputTxt = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width:  calc( 100% - 53px );
  box-sizing: border-box;
`


const Input = (props) => {
  return <InputTxt  {...props} />
}

export default Input