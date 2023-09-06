import { getVocab } from '../api/vocabData';
import navEvents from '../components/events/navEvents';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domBuilder from '../pages/domBuilder';
import { noVocab, showVocab } from '../pages/words';

const startApp = (user) => {
  domBuilder();
  navBar();
  navEvents(user);
  logoutButton();
  getVocab(user.userId).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      noVocab();
    }
  });
};

export default startApp;
