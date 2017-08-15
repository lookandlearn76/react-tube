import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/videoList';
import VideoInfo from './components/videoInfo';

const API_KEY = 'AIzaSyDicbu-cuTqhkus8eATLtZPH2zAnJuI5BQ';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      chosenVideo: null
    };

    this.videoSearch('Einaudi');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        chosenVideo: videos[0]
      });
    });

  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term); }, 400);

    return (
      <div>
        <h1 className="title">REACT-TUBE</h1>
        <h2 className="title">The ReactJS video-clip searcher</h2>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoInfo video={this.state.chosenVideo} />
        <VideoList
          onVideoSelect={chosenVideo => this.setState({chosenVideo})} videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
