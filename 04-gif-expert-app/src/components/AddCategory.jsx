import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

	const [inputValue, setInputValue] = useState('');

	//console.log(inputValue);

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if(inputValue.trim().length > 0){
			
			//setCategories([...categories, inputValue]);
			setCategories((cats => [...cats, inputValue]));
			setInputValue('');

		}

	}

  return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="text"
				value={ inputValue }
				onChange={ handleInputValue }
			/>
		</form>
  )

}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}