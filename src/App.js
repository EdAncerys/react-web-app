import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
