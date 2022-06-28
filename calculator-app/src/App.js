import "./App.css";
import Button from "./Components/button";
import Input from "./Components/input";
import { useState } from "react";
import * as math from "mathjs";
function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };
  const clearText = () => {
    setText("");
    setResult("");
  };
  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };
  return (
    <div className="App">
      <div className="calc">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" handleClick={addToText} />
        </div>
        <Button symbol="Clear" handleClick={clearText} />
      </div>
    </div>
  );
}

export default App;
