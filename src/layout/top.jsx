
import React from "react";
import styled from "styled-components";


const TopItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
 
`



const Top = ({ children }) => {
  return <TopItem>{ children }</TopItem>
}

export default Top;