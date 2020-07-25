import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Medium from './components/pages/Medium';
import './css/App.css';

export default function App() {
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [mediumPage, setMediumPage] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  // Save state to local storage
  const LOCAL_STORAGE_KEY = 'EdAncerys.App';
  const saveToLocalStorage = {
    aboutPage: aboutPage,
    contactPage: contactPage,
    selectedProjectId: selectedProjectId,
  };

  useEffect(() => {
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedToJSON != null) {
      setAboutPage(JSON.parse(savedToJSON)['aboutPage']);
      setContactPage(JSON.parse(savedToJSON)['contactPage']);
      setSelectedProjectId(JSON.parse(savedToJSON)['selectedProjectId']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saveToLocalStorage));
  }, [saveToLocalStorage]);

  // Navigate pages
  function goToHomePage() {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(false);
  }

  function goToAboutPage() {
    setAboutPage(!aboutPage);
    setContactPage(false);
    setMediumPage(false);
  }

  function goToContactPage() {
    setAboutPage(false);
    setContactPage(!contactPage);
    setMediumPage(false);
  }

  function goToMediumPage() {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(!mediumPage);
  }

  // Selected project
  function selectedProject(id) {
    setSelectedProjectId(id);
  }

  return (
    <div className="App">
      <Header
        aboutPage={aboutPage}
        contactPage={contactPage}
        mediumPage={mediumPage}
        goToHomePage={goToHomePage}
        goToAboutPage={goToAboutPage}
        goToContactPage={goToContactPage}
        goToMediumPage={goToMediumPage}
      />
      <div className="content">
        {!aboutPage && !contactPage && !mediumPage && (
          <Content
            selectedProject={selectedProject}
            selectedProjectId={selectedProjectId}
          />
        )}
        {aboutPage && <About />}
        {contactPage && <Contact />}
        {mediumPage && <Medium />}
      </div>
      <Footer goToContactPage={goToContactPage} />
    </div>
  );
}
