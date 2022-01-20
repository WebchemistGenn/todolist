import React from "react"
import Btn from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
// import Radio from "./components/radio";
// import Select from "./components/select";
// import Slider from "./components/slider";
import "./assets/css/reset.css"

import Wrap from "./layout/wrap";
import TopItem from "./layout/top";
import BodyItem from "./layout/body";

function App() {
  // const [radio, setRadio] = React.useState();
  const [txt, setTxt] = React.useState();
  const [print, setPrint] = React.useState();

  // const handleChangeRadio = (e) => {
  //   setRadio(e.target.value)
  // }

  const handleChange = (event) => {
    setTxt(event.target.value)
    console.log(`value : ${event.target.value}`)
  };

  const hadleButton = (e) => {
    console.log(`sadfsadf`)
    e.preventDefault();
    setTxt('');
    setPrint(txt);
  }

  // const numbers = [1, 2, 3, 4, 5];
  // const result = numbers.map((num) => num *2);
  // console.log(result);


  return (
    <Wrap>
      <div className="top">
        <h1>Theme!!!</h1>
      </div>
      <TopItem>
        <form onSubmit={hadleButton}>
          <Input onChange={handleChange} value={txt}/>
          <Btn type="submit">버튼</Btn>
        </form>
      </TopItem>
      <BodyItem>
        <Checkbox />
        <div>{print}</div>
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