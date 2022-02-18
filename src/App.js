// import React from "react";
import React, { useState } from "react";
import Btn from "./components/button";
// import Check from "./components/checkbox";
import Input from "./components/input";
// import Radio from "./components/radio";
// import Select from "./components/select";
// import Slider from "./components/slider";
import "./assets/css/reset.css";

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
    input[type="checkbox"] {
      margin-right: 10px;
    }
  }
`;

function App() {
  // const [radio, setRadio] = React.useState();
  // const handleChangeRadio = (e) => {
  //   setRadio(e.target.value)
  // }

  // input value를 useState로 사용하지 않는 이유는 키보드로 입력 한번에 화면을 새로침을 한번씩 하여 성능을 저하 시킴.
  // const [text, setText] = React.useState("");
  // const [list, setList] = React.useState([]);

  const [list, setList] = useState([
    { id: 0, text: "첫 할 일입니다.", checked: false }, // 할 일을 등록할때 엑션으로 인한 리스트 변경 값을 한곳에 모아두는것이 유리함.
  ]);

  // const change = (e) => setText(e.target.value);
  const hadleButton = (e) => {
    // e.preventDefault();
    // if (text === "") {
    //   return;
    // }
    // setText("");
    // setList((arr) => [text, ...arr]);

    e.preventDefault();
    const el = e.target.querySelector("input"); // 엔터나 버튼으로 이벤트를 발생시 form이 이벤트의 target임 안쪽의 input태그를 참조함.
    const txt = el.value;
    if (txt === "") {
      return;
    }
    const lastTodo = list[list.length - 1]; // 리스트에서 마지막 할 일을 가져온다.
    const id = lastTodo === undefined ? 0 : lastTodo.id; // 리스트에 아무것도 없으면 undefined이고 id값은 0으로 셋팅 id값은 중요함.
    setList([...list, { id: id + 1, text: txt, checked: false }]);
    el.value = "";
  };

  // const [check, setCheck] = React.useState(false);
  // const checkChange = ({ e }) => {
  //   setCheck(!check);
  //   if (check) {
  //     console.log(1);
  //   } else {
  //     console.log(2);
  //   }
  // };

  const hadleDeletButton = (e) => {
    const id = Number(e.target.dataset.id);
    const tempList = list.filter((todo) => todo.id !== id);
    setList(tempList);
    console.log(">>", id, tempList);
  };

  console.log("새로고침됨!!!");
  return (
    <Wrap>
      <div className="top">
        <h1>Theme!!!</h1>
      </div>
      <TopItem>
        <form onSubmit={hadleButton}>
          {/* <Input onChange={change} value={text} type="text" /> */}
          <Input type="text" />
          <Btn type="submit">버튼</Btn>
        </form>
      </TopItem>
      <BodyItem>
        <UL>
          {/* {list.map((item, index) => (
            <li key={index}>
              <p>
                <Check checked={check} onChange={(e) => checkChange(e)} />
                {item}
              </p>
              <Btn>삭제</Btn>
            </li>
          ))} */}
          {list.map(
            (
              item // map을 사용할때 index를 key값을 절대 사용하지 않아야함.
            ) => (
              <li key={item.id}>
                {/*key값을 아이디값을 데이타에서 뽑아 쓰거나 중복되지 않는 값을 써야 새로고침되어도 정확한 row를 조작 할 수 있음.*/}
                <p>
                  <input type="checkbox" value={item.checked} />
                  {item.text}
                </p>
                <button onClick={hadleDeletButton} data-id={item.id}>
                  {/*data-id를 사용한것은 event객체만으로 정확한 row를 찾기 위함임.*/}
                  삭제
                </button>
              </li>
            )
          )}
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
