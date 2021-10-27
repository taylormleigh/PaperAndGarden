import React, {useState} from 'react';

const useForm = (callback) => {
  //initializes a state variable and its setter function
  const [inputs, setInputs] = useState({});
  
  //manages the submit event
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    // if(callback){
      callback();
    // }
  }

  //manages the input event
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  //return the handleSubmit, handleInputChange, and the inputs
  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useForm;