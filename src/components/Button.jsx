import React from 'react';

function Button({ children, disabled, className, onClick }) {
  return (
    <button
      type="submit"
      disabled={ disabled }
      className={ className }
      onClick={ onClick }
    >
      { children }
    </button>
  )
}

export default Button;
