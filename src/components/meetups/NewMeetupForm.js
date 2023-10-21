import React, {useRef} from 'react'

import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card';


const NewMeetupForm = ({ onAddMeetup }) => {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    
    if (
        !titleInputRef.current.value || 
        !imageInputRef.current.value || 
        !addressInputRef.current.value || 
        !descriptionInputRef.current.value
      ) return;

    const enteredValues = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value
    }

    onAddMeetup(enteredValues);
 
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
