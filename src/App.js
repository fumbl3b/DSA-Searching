import React from 'react';
import './App.css';
import LinearSearch from './LinearSearch';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      linear: {
        linearArr: [],
        searchCount: null,
        index: null,
        found: false,
        used: false
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  stringToArr = (str) => {
    const newArr = str.split(",").map(val => parseInt(val));
    this.setState({
      linear: { linearArr: newArr }
    })
    
  }

  handleSubmit = e => {
    console.log('a value was submitted ', this.state.value)
    e.preventDefault();
    this.stringToArr(this.state.value);
    this.setState({
      value: ''
    });
  }

  // linearSearch = (arr, val) => {
  //   const sarr = [];
  // }

  render() {
    return (
      <div className="App">

        <LinearSearch
          stateValue={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  } 
}