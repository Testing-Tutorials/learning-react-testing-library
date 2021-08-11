import React from "react";
import { connect } from "react-redux";

function Counter({ increment, decrement, count }) {
  return (
    <div>
      <button onClick={increment}>+</button>
      <span data-testid="count">{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
/* connect returns a function you can call 
passing in the component. 
It sort of produces a HO compenent,
that wraps around the Counter component. */
export default connect(
  (state) => ({
    count: state.count,
  }),
  (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  })
)(Counter);
