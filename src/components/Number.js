import React from "react";
import { increaseNumber, decreaseNumber } from "../redux/number/numberAction";
import { useDispatch, useSelector } from "react-redux";
const Number = () => {
  const state = useSelector((state) => state.numberState);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>number: {state.number}</h1>
      <button onClick={() => dispatch(decreaseNumber())}>decrase</button>
      <button onClick={() => dispatch(increaseNumber())}>increase</button>
    </div>
  );
};

export default Number;
