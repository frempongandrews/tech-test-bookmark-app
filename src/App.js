import React, { Component } from 'react';
import './App.css';
import BookmarksBoard from './components/BookmarksBoard';

class App extends Component {
  render() {
    return (
      <div className="App">

          <BookmarksBoard/>

      </div>
    );
  }
}

export default App;
