import React from 'react';
import './form-input.css';

const FormInput = ({ header, handleChange, ...otherProps }) => {
	return (
		<div className='form-group'>
			<h1>{header}</h1>
			<input onChange={handleChange} type='text' {...otherProps} />
			<button type='submit'>submit</button>
		</div>
	);
};

export default FormInput;
