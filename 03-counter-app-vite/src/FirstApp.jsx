import PropTypes from "prop-types";

const FirstApp = ({ name = 'No hay nombre', age }) => {
  return (
    <>
      <p>
        {name} and age {age}
      </p>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  name: 'No hay nombre',
  age: 0,
}

export default FirstApp;
