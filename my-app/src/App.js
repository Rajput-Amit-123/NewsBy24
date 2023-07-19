import React, { Component } from 'react';
import NavBar from './components/NavBar.mjs';
import News from './components/News.mjs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner.mjs';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<News key="general" country="in" category="general" />} />
          <Route path='/business' element={<News key="business" country="in" category="business" />} />
          <Route path='/entertainment' element={<News key="entertainment" country="in" category="entertainment" />} />
          <Route path='/general' element={<News key="general" country="in" category="general" />} />
          <Route path='/health' element={<News key="health" country="in" category="health" />} />
          <Route path='/science' element={<News key="science" country="in" category="science" />} />
          <Route path='/sports' element={<News key="sports" country="in" category="sports" />} />
          <Route path='/technology' element={<News key="technology" country="in" category="technology" />} />
        </Routes>
      </Router>
    )
  }
}