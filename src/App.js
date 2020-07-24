import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './css/App.css';

export default class App extends Component {
  state = {
    aboutPage: false,
    contactPage: false,
  };

  homePage = () => {
    this.setState({
      aboutPage: false,
      contactPage: false,
    });
  };

  aboutPage = () => {
    this.setState({
      contactPage: false,
      aboutPage: !this.state.aboutPage,
    });
  };

  contactPage = () => {
    this.setState({
      aboutPage: false,
      contactPage: !this.state.contactPage,
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          aboutPage={this.aboutPage}
          contactPage={this.contactPage}
          homePage={this.homePage}
          state={this.state}
        />
        <div className="content">
          {!this.state.aboutPage && !this.state.contactPage && <Content />}
          {this.state.aboutPage && <About />}
          {this.state.contactPage && <Contact />}
        </div>
        <Footer contactPage={this.contactPage} />
      </div>
    );
  }
}
