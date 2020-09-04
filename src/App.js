import React from 'react';
import Post from './Components/Post';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="app__header">
      <img alt="Instagram" class="app__headerImage" src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>

      <h1>this is the header for the instagram clone</h1>

      <Post />
      {/* {Header} */}
      {/* {posts} */}
            {/* {posts} */}

    </div>
  );
}

export default App;
