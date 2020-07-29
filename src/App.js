import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Medium from './components/pages/Medium';
import TickTackToe from './components/content/TicTacToe/TickTackToe';
import './css/App.css';

export default function App() {
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [mediumPage, setMediumPage] = useState(false);
  const [tickTackToePage, setTickTackToePage] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(1);
  const [selectedArticleId, setSelectedArticleId] = useState();

  // Save state to local storage
  const LOCAL_STORAGE_KEY = 'EdAncerys.App';
  const saveToLocalStorage = {
    aboutPage: aboutPage,
    contactPage: contactPage,
    mediumPage: mediumPage,
    selectedProjectId: selectedProjectId,
    selectedArticleId: selectedArticleId,
  };

  useEffect(() => {
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedToJSON != null) {
      setAboutPage(JSON.parse(savedToJSON)['aboutPage']);
      setContactPage(JSON.parse(savedToJSON)['contactPage']);
      setMediumPage(JSON.parse(savedToJSON)['mediumPage']);
      setSelectedProjectId(JSON.parse(savedToJSON)['selectedProjectId']);
      setSelectedArticleId(JSON.parse(savedToJSON)['selectedArticleId']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saveToLocalStorage));
  }, [saveToLocalStorage]);

  // Navigate pages
  const goToHomePage = () => {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(false);
    setTickTackToePage(false);
  };

  const goToAboutPage = () => {
    setAboutPage(!aboutPage);
    setContactPage(false);
    setMediumPage(false);
    setTickTackToePage(false);
  };

  const goToContactPage = () => {
    setAboutPage(false);
    setContactPage(!contactPage);
    setMediumPage(false);
    setTickTackToePage(false);
  };

  const goToMediumPage = () => {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(!mediumPage);
    setTickTackToePage(false);
  };

  const goToMediumPreviewPage = () => {
    setSelectedArticleId();
    setTickTackToePage(false);
  };

  const goToTickTackToePage = () => {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(false);
    setTickTackToePage(!tickTackToePage);
  };

  // Selected project
  const selectedProject = (id) => {
    setSelectedProjectId(id);
  };

  // Selected article
  const selectedArticle = (id) => {
    setSelectedArticleId(id);
  };

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
        tickTackToePage={tickTackToePage}
        goToTickTackToePage={goToTickTackToePage}
      />
      <div className="content">
        {!aboutPage && !contactPage && !mediumPage && !tickTackToePage && (
          <Content
            selectedProject={selectedProject}
            selectedProjectId={selectedProjectId}
          />
        )}
        {aboutPage && <About />}
        {contactPage && <Contact />}
        {mediumPage && (
          <Medium
            selectedArticleId={selectedArticleId}
            selectedArticle={selectedArticle}
            goToMediumPreviewPage={goToMediumPreviewPage}
          />
        )}
        {tickTackToePage && <TickTackToe />}
      </div>
      <Footer goToContactPage={goToContactPage} />
    </div>
  );
}
