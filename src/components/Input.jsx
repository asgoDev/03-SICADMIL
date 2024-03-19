import React from 'react'

function Input({id, type, placeholder, value, setValue}) {
  return (
    <input
    // className='invalid-input'
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        autoComplete='off'
      />
  )
}

export default Input