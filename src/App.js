import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Medium from './components/pages/Medium';
import TickTackToe from './components/pages/TickTackToe';
import RPS from './components/pages/RPS';
import HangMan from './components/pages/HangMan';

export const AppContext = React.createContext();

export default function App() {
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [mediumPage, setMediumPage] = useState(false);
  const [hangManPage, setHangManPage] = useState(false);
  const [rpsPage, setRPSPage] = useState(false);
  const [tickTackToePage, setTickTackToePage] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(1);
  const [selectedArticleId, setSelectedArticleId] = useState();
  const [dropDown, setDropDown] = useState(false);
  const [dropDownHover, setDropDownHover] = useState(false);

  // Save state to local storage
  const LOCAL_STORAGE_KEY = 'EdAncerys.App';
  const timeSaved = new Date().getTime();

  const saveToLocalStorage = {
    timeSaved: timeSaved,
    aboutPage: aboutPage,
    contactPage: contactPage,
    mediumPage: mediumPage,
    tickTackToePage: tickTackToePage,
    rpsPage: rpsPage,
    hangManPage: hangManPage,
    selectedProjectId: selectedProjectId,
    selectedArticleId: selectedArticleId,
  };

  const validateLocalStorage = () => {
    const hours = 1;
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedTimeToJSON = JSON.parse(savedToJSON).timeSaved;
    if (new Date().getTime() - savedTimeToJSON > hours * 60 * 60 * 1000)
      return false;
    else return true;
  };

  useEffect(() => {
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedToJSON != null && validateLocalStorage()) {
      setAboutPage(JSON.parse(savedToJSON).aboutPage);
      setContactPage(JSON.parse(savedToJSON).contactPage);
      setMediumPage(JSON.parse(savedToJSON).mediumPage);
      setRPSPage(JSON.parse(savedToJSON).rpsPage);
      setHangManPage(JSON.parse(savedToJSON).hangManPage);
      setTickTackToePage(JSON.parse(savedToJSON).tickTackToePage);
      setSelectedProjectId(JSON.parse(savedToJSON).selectedProjectId);
      setSelectedArticleId(JSON.parse(savedToJSON).selectedArticleId);
    } else localStorage.clear();
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
    setRPSPage(false);
    setHangManPage(false);
  };

  const goToAboutPage = () => {
    setAboutPage(!aboutPage);
    setContactPage(false);
    setMediumPage(false);
    setTickTackToePage(false);
    setRPSPage(false);
    setHangManPage(false);
  };

  const goToContactPage = () => {
    setAboutPage(false);
    setContactPage(!contactPage);
    setMediumPage(false);
    setTickTackToePage(false);
    setRPSPage(false);
    setHangManPage(false);
  };

  const goToMediumPage = () => {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(!mediumPage);
    setTickTackToePage(false);
    setRPSPage(false);
    setHangManPage(false);
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
    setRPSPage(false);
    setHangManPage(false);
  };

  const goToRPSPage = () => {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(false);
    setTickTackToePage(false);
    setRPSPage(!rpsPage);
    setHangManPage(false);
  };

  const goToHangManPage = () => {
    setAboutPage(false);
    setContactPage(false);
    setMediumPage(false);
    setTickTackToePage(false);
    setRPSPage(false);
    setHangManPage(!hangManPage);
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
    <AppContext.Provider
      value={{
        goToHomePage,
        goToAboutPage,
        aboutPage,
        goToMediumPage,
        mediumPage,
        goToTickTackToePage,
        tickTackToePage,
        goToRPSPage,
        rpsPage,
        goToHangManPage,
        hangManPage,
        goToContactPage,
        contactPage,
        dropDown,
        setDropDown,
        dropDownHover,
        setDropDownHover,
      }}
    >
      <div className="App">
        <NavBar />
        <div className="content">
          {!aboutPage &&
            !contactPage &&
            !mediumPage &&
            !tickTackToePage &&
            !rpsPage &&
            !hangManPage && (
              <Content
                selectedProject={selectedProject}
                selectedProjectId={selectedProjectId}
                goToTickTackToePage={goToTickTackToePage}
                goToRPSPage={goToRPSPage}
                goToHangManPage={goToHangManPage}
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
          {rpsPage && <RPS />}
          {hangManPage && <HangMan />}
        </div>
        <Footer goToContactPage={goToContactPage} />
      </div>
    </AppContext.Provider>
  );
}
