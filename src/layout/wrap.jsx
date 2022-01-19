import React from "react";
import styled from "styled-components";


const Wrap = styled.div`
    .top {
        padding: 30px;
        background: #ddd;
    }
    h1 {
        font-size: 26px;
        text-align: center;
    }
`



const WrapBox = ({ children }) => {
  return <Wrap>{ children }</Wrap>
}

export default WrapBox