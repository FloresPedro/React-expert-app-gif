import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChance = (e) => { 
        setInputValue(e.target.value);
     }

     const handleSubmit = (e) => { 
      e.preventDefault();
      if (inputValue.trim().length > 2){
        setCategorias( c => [ inputValue, ...c] );
        setInputValue('');
      }
      //console.log('Submit echo');
      }

  return (
    <form onSubmit={ handleSubmit }>
    <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChance }
    />

    </form>
  )
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
}

export default AddCategory