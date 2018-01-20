import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar'

const API_KEY = 'process.env.REACT_APP_DEV_YOUTUBE_API';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'))