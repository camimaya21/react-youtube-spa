import _ from 'lodash';
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

    this.state = { 
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('snowboarding')
  }

  videoSearch(term){
    YTSearch({key: YT_API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0]
       });
    }); 
  }

  render(){

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))