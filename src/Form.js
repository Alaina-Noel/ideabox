import React, { useState } from 'react';
import './Form.css';

const Form = (props) => { 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  }

  const clearInputs = () => {
    setTitle('');
    setDescription('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: title,
      description: description
    };

    props.addIdea(newIdea);
    clearInputs();
  }

return (
    <form>
      <label htmlFor="title">Title</label>
      <input name="title" type="text" placeholder="Title"
      value={title} onChange={event => handleTitleChange(event)}></input>


      <label htmlFor="description">Description</label>
      <input name="description" type="text" placeholder="Description"
      value={description} onChange={event => handleDescriptionChange(event)}></input>

      <button type="submit" id="add" onClick={(event) => {handleSubmit(event)}}>Add Idea</button>
    </form>
  )
}

export default Form;

