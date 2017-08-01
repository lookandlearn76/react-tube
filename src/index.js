import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import VideoList from './components/videoList';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDicbu-cuTqhkus8eATLtZPH2zAnJuI5BQ';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key:API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
