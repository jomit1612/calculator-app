import "./input.css";

const Input = ({ text, result }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1>{result} </h1>
        <div className="text">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};
export default Input;
