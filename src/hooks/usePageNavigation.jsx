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

export default {
  goToHomePage,
  goToAboutPage,
  goToContactPage,
  goToMediumPage,
  goToMediumPreviewPage,
  goToTickTackToePage,
  goToRPSPage,
};
