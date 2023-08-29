import './App.css';
import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {


  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }


  render() {
    return (
      <>
        <BrowserRouter basename='/NewsBEE'>
          <Navbar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

