import React from 'react';

export default function NewCity({prev, inputs, handleInputChange, handleSubmit}) {
  return (
    <div id="F3">
      <h1>NEW CITY IN {inputs['Region Name'].toUpperCase()}</h1>
      <h3>Add a new city, town, etc. to your region.</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name your city</label>
        <br />
        <input 
          type="text" 
          name="City Name" 
          value={inputs["City Name"]}          
          onChange={handleInputChange} 
          placeholder="city name"></input>
        <br />
        <button onClick={prev}>BACK</button> | <button type="submit">DONE</button>
      </form>
    </div>
  )
}