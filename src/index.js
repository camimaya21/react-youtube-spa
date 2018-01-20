import React from 'react';
import ReactDOM from 'react-dom';
import {YT_API_KEY} from 'babel-dotenv';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar'

YTSearch({key: YT_API_KEY, term: 'paramore'}, function(data){
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'))