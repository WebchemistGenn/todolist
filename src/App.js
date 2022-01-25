import React from "react"
import Btn from "./components/button";
import Check from "./components/checkbox";
import Input from "./components/input";
// import Radio from "./components/radio";
// import Select from "./components/select";
// import Slider from "./components/slider";
import "./assets/css/reset.css"

import Wrap from "./layout/wrap";
import TopItem from "./layout/top";
import BodyItem from "./layout/body";
import styled from "styled-components";

const UL = styled.ul`
  width: 100%;
  li {
    display: flex;
    align-items: center; 
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      display: flex;
      align-items: center; 
      font-size: 16px;
      color: #333;
    }
    input[type='checkbox'] {
      margin-right: 10px;
    }
  }
`


function App() {
  // const [radio, setRadio] = React.useState();
  // const handleChangeRadio = (e) => {
  //   setRadio(e.target.value)
  // }
      

  const [text, setText] = React.useState('');
  const [list, setList] = React.useState([]);
 
  const change = (e) => setText(e.target.value);
  const hadleButton = (e) => {
    e.preventDefault();
    if (text === ''){
      return;
    }
    setText('');
    setList( (arr) => [text, ...arr] )
  }

  const [check, setCheck] = React.useState(false);
  const checkChange = ({ e }) => {
    setCheck(!check);
    if(check) {
      console.log(1);
    }else {
      console.log(2);
    }
    
  }
  
  return (
    <Wrap>
      <div className="top">
        <h1>Theme!!!</h1>
      </div>
      <TopItem>
        <form onSubmit={hadleButton}>
          <Input 
            onChange={change} 
            value={text} 
            type="text"
          />
          <Btn type="submit">버튼</Btn>
        </form>
      </TopItem>
      <BodyItem>
        <UL>
          {list.map((item, index) => (
            <li key={index}>
              <p>
                <Check checked={check} onChange={(e) => checkChange(e)} />
                {item}
              </p>
              <Btn>삭제</Btn>
            </li>
          ))}
        </UL>
        {/* <Checkbox />
        <div>{ list }</div> */}
      </BodyItem>
      

      {/* <h3>Radio</h3> */}
      {/* <Radio value="0" checked={radio === "0"} onChange={handleChangeRadio} />
      <Radio value="1" checked={radio === "1"} onChange={handleChangeRadio} />
      <Radio value="2" checked={radio === "2"} onChange={handleChangeRadio} /> */}
      {/* <h3>Select</h3>
      <Select />

      <h3>Slider</h3>
      <Slider /> */}
    </Wrap>
  );
}

export default App;