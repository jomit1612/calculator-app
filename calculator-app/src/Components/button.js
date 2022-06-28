import "./button.css";
const Button = ({ symbol, color, handleClick }) => {
  return (
    <div onClick={() => handleClick(symbol)} className="button-wrapper">
      {symbol}
    </div>
  );
};

export default Button;
