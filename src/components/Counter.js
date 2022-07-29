import React, { useState } from "react";
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/counter/counterAction";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const state = useSelector((state) => state.counterState);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>counter: {state.counter}</h1>
      <button onClick={() => dispatch(decreaseCounter(+value))}>decrase</button>
      <button onClick={() => dispatch(increaseCounter(+value))}>
        increase
      </button>
    </div>
  );
};

export default Counter;

//------------------old version----------------
// import React from "react";
// import { increase } from "../redux/counter/counterAction";
// import { connect } from "react-redux";

// const Counter = (props) => {
//   return (
//     <div>
//       <h1>counter - {props.counter}</h1>
//       <button onClick={() => props.increase()}>increase</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch(increase()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
