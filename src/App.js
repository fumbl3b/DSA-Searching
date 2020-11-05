import React from 'react';
import './App.css';
import LinearSearch from './LinearSearch';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: '',
      linear: {
        linearArr: [],
        val: null,
        searchCount: null,
        index: null,
        found: false,
        used: false
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleQueryValChange = this.handleQueryValChange.bind(this);
    this.linearSearch = this.linearSearch.bind(this);
    this.stringToArr = this.stringToArr.bind(this);
    this.searchNumToNum = this.searchNumToNum.bind(this);
  }

  handleChange = e => {
    this.setState({
      ...this.state, value: e.target.value
    });
  }

  handleQueryValChange = e => {
    this.setState({
      ...this.state, search: e.target.value 
    });
  }

  stringToArr = (str) => {
    const newArr = str.split(",").map(val => parseInt(val));
    this.setState({
      linear: { ...this.state.linear, linearArr: newArr }
    })
  }

  searchNumToNum = (str) => {
    const searchNum = parseInt(str);
    this.setState({
      linear: { ...this.state.linear, val: searchNum  }
    })
  }

  handleSubmit = e => {
    console.log('a value was submitted ', this.state.value)
    e.preventDefault();
    this.stringToArr(this.state.value);
    this.searchNumToNum(this.state.search);
    this.setState({
      value: '',
      search: '',
      linear: { ...this.state.linear, used: true }
    });
    this.linearSearch(this.state.linear.linearArr, this.state.linear.val);
    this.render();
  }


  linearSearch = (arr, val) => {
    const searchArray = arr;
    for(let i = 0; i < searchArray.length; i++) {
      if(arr[i] === val) {
        this.setState({
          linear: {
            found: true,
            index: i,
            searchCount: i+1,
            ...this.state.linear
          }
        });
      } else if(i === arr.length) {
        this.setState({
          linear: { searchCount: i+1, ...this.state.linear }
        })
      }
    }
    
    return(
      <div>
        <p>Array input: {this.state.linear.linearArr}</p>
        <p>Searching for: {this.state.linear.val}</p>
        {this.state.linear.found && <p>We Found it at index: {this.state.linear.index}</p>}
        {!this.state.linear.found && <p>We did not find {this.state.linear.val}</p>}
        <p>Operation completed in {this.state.linear.searchCount} tries.</p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="result">
          {this.state.linear.used && this.linearSearch(this.state.linear.linearArr, this.state.linear.val)}
        </div>
        <LinearSearch
          stateValue={this.state}
          handleChange={this.handleChange}
          handleQueryValChange={this.handleQueryValChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  } 
}