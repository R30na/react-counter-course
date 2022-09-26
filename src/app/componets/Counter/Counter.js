import React, { useState } from "react";
import Confetti from "react-confetti";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    setCounter(counter + 1);
    console.log("PLus button clicked!");
  };

  const handleClickMinus = () => {
    // debugger;
    if (counter !== 0) {
      setCounter(counter - 1);
    }
    console.log("Minus button clicked!");
    return;
  };

  // Uglly way

  // if (counter <= 5) {
  //   return (
  //     <div>
  //       <button onClick={handleClickPlus}>+</button>
  //       <h5>{counter}</h5>
  //       <button onClick={handleClickMinus}>-</button>
  //     </div>
  //   );
  // } else if (counter < 10 && counter > 5) {
  //   return (
  //     <div>
  //       <button onClick={handleClickPlus}>+</button>
  //       <h3>{counter}</h3>
  //       <button onClick={handleClickMinus}>-</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <button onClick={handleClickPlus}>+</button>
  //       <h1>{counter}</h1>
  //       <button onClick={handleClickMinus}>-</button>
  //     </div>
  //   );
  // }
  // return <></>;

  // JSX syntax
  // nice way
  return (
    <div>
      <button onClick={handleClickPlus}>+</button>
      {
        // inline conditional rendering
        // ? if
        // : else
        counter <= 5 ? (
          <h5>{counter}</h5>
        ) : counter < 10 && counter > 5 ? (
          <h3>{counter}</h3>
        ) : counter >= 10 ? (
          <>
            <h1>{counter}</h1>
            {counter % 10 === 0 && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
          </>
        ) : null
      }
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};

export default Counter;
