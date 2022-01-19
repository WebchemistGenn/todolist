import React from "react"
import Btn from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";
import "./assets/css/reset.css"

import Wrap from "./layout/wrap";
import TopItem from "./layout/top";

function App() {
  const [radio, setRadio] = React.useState();
  const [txt, setTxt] = React.useState();

  const handleChangeRadio = (e) => {
    setRadio(e.target.value)
  }
  const inputVal = (e) => {
    setTxt(e.target.value)
  }


  const hadleButton = (e) =>{
    e.preventDefault();
    console.log(txt);
  }




  return (
    <Wrap>
      <div className="top">
        <h1>Theme!!!</h1>
      </div>

      <TopItem>
        <Input onChange={inputVal} />
        <form onSubmit={hadleButton}>
          <Btn type="submit">버튼</Btn>
        </form>
      </TopItem>

      




      <Checkbox />

      <h3>Checkbox</h3>


      <h3>Radio</h3>
      <Radio value="0" checked={radio === "0"} onChange={handleChangeRadio} />
      <Radio value="1" checked={radio === "1"} onChange={handleChangeRadio} />
      <Radio value="2" checked={radio === "2"} onChange={handleChangeRadio} />

      <h3>Select</h3>
      <Select />

      <h3>Slider</h3>
      <Slider />

     
    </Wrap>
  );
}

export default App;