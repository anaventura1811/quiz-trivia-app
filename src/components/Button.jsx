import React from 'react';

function Button({ children, disabled, className }) {
  return (
    <button type="submit" disabled={ disabled } className={ className }>
      { children }
    </button>
  )
}

export default Button;
