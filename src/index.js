import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBrWoEtozraMSeowAnvZzGc72KQI3m9evw';

YTSearch({
    key: API_KEY,
    term: 'oraclefusionhub'
},
    function(data) {
        console.log(data);
    }
)

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'))