import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {

  return <div className="App">
  
    <Router>
        <Link to="/createPost">Create Post</Link>
        <Link to="/">Home Page</Link>
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/createPost" exact element={<CreatePost />} />
           <Route path="/" exact element={<Home />} />
        </Routes>
    </Router>

  </div>;
}

export default App;

