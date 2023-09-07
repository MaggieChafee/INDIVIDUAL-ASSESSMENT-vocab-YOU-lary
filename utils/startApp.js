import { getVocab } from '../api/vocabData';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../pages/domBuilder';
import { noVocab, showVocab } from '../pages/words';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navBar();
  navEvents(user);
  logoutButton();
  getVocab(user.uid).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      noVocab();
    }
  });
};

export default startApp;
