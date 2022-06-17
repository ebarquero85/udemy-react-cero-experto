import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => setCounter( (c) => c + 1 );

  const handleReset = (e) => setCounter( () => 0 );

  const handleSubstract = (e) => setCounter( (c) => c - 1 );

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={handleAdd}> +1 </button>
      <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
      <button onClick={handleSubstract}> -1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};
