import React from 'react';
import './Ideas.css'

const Ideas = ({name, name2}) => {
  // const { name , name2 } = props; - this used to be here with props on line 4 as the arg
  return (
    <h2>Hello, {name} {name2}!</h2>
  )
}

export default Ideas;