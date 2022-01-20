import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 70px;
  padding: 10px; 
  background: #eee;
  border: 0;
  border-radius: 3px;
  margin-left: 10px;
  box-sizing: border-box;
`



const Button = ({ children }) => {
  return <Btn>{ children }</Btn>
}

export default Button;