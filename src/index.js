import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {YT_API_KEY} from 'babel-dotenv';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
import videoDetail from './components/video-detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YT_API_KEY, term: 'snowboarding'}, (videos) => {
      this.setState({ videos });
    }); 
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))