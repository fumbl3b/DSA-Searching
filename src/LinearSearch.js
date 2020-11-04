import React from 'react';
import './LinearSearch.css'

export default function LinearSearch (props) {


  return (
    <div className="linear-search">
      
      <form onSubmit={props.handleSubmit}>
        <label>
          <h2>Linear Search:</h2>
        </label>
          <textarea value={props.stateValue.value} onChange={props.handleChange} rows={5} cols={50} />
          <input type="submit" />
      </form>
    </div>
  );
}
