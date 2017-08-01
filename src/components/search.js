import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'placeholder' };
  }

  onInputChange(e) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
    <div>
      <input onChange={this.onInputChange}/>;
    </div>
    );
  }



}

export default SearchBar;
