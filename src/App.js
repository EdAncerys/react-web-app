import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components//pages/About';
import './css/App.css';

export default class App extends Component {
  state = {
    aboutMe: false,
    contact: false,
  };

  aboutPage = () => {
    this.setState({
      aboutMe: !this.state.aboutMe,
    });
  };

  render() {
    return (
      <div className="App">
        <Header aboutPage={this.aboutPage} />
        {!this.state.aboutMe && !this.state.contact && <Content />}
        {this.state.aboutMe && <About />}
        <Footer />
      </div>
    );
  }
}
