import "./App.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const increaseNum = () => {
    setCount((current) => current + 1);
  };
  const decreaseNum = () => {
    setCount((current) => current - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <Container>
      <Title>Counter: {count}</Title>
      <Btns>
        <Btn onClick={increaseNum}>plus</Btn>
        <Btn onClick={decreaseNum}>minus</Btn>
        <Btn onClick={reset}>reset</Btn>
      </Btns>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  font-size: 30px;

  border-radius: 12px;
`;

const Title = styled.h1`
  padding-top: 5%;
  padding-bottom: 5%;
  margin-left: 20%;
  margin-right: 20%;

  border-radius: 12px;
  background-color: #ffdb82;

  border-top: none;
  border-left: none;
  border-bottom: 2px solid rgb(152, 145, 193);
  border-right: 2px solid rgb(152, 145, 193);
`;

const Btns = styled.div`
  padding-top: 5%;
  padding-bottom: 10%;
`;

const Btn = styled.button`
  display: inline-flex;
  outline: none;

  border-top: none;
  border-left: none;
  border-bottom: 2px solid rgb(255, 219, 130);
  border-right: 2px solid rgb(255, 219, 130);
  border-radius: 7px;

  color: white;
  background-color: #9891c1;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 2.5rem;

  height: 3rem;
  font-size: 2rem;

  margin-left: 3%;
  margin-right: 3%;
`;

export default App;
