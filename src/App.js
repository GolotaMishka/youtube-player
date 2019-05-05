import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyAzhHjw7RkZyqvkws-VmkdqJdyF1fDbNOo';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };

    this.videoSearch('Creep');
}

videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });

}
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
