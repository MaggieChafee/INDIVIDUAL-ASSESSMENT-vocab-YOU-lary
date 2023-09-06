import { getJavaScriptVocab } from '../../api/vocabData';
import { noVocab, showVocab } from '../../pages/words';
import { signOut } from '../../utils/auth';

const navEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#js-vocab').addEventListener('click', () => {
    getJavaScriptVocab().then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        noVocab();
      }
    });
  });
};

export default navEvents;
