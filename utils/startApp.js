import { getVocab } from '../api/vocabData';
import navBar from '../components/navBar';
import domBuilder from '../pages/domBuilder';
import { noVocab, showVocab } from '../pages/words';

const startApp = () => {
  domBuilder();
  navBar();
  getVocab().then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      noVocab();
    }
  });
};

export default startApp;
