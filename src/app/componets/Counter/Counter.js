const Counter = (props) => {
  // const [] = React.useState();

  const handleClickPlus = () => {
    console.log("PLus button clicked!");
  };

  const handleClickMinus = () => {
    console.log("Minus button clicked!");
  };

  return (
    <div>
      <button onClick={handleClickPlus}>+</button>
      <h1>0</h1>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};

export default Counter;
