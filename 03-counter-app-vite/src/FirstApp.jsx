import PropTypes from 'prop-types';


const FirstApp = ({ name, age }) => {
	
  return (
		<p>
				{ name } and age { age }
		</p>

  )

}

FirstApp.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired
}

export default FirstApp;

