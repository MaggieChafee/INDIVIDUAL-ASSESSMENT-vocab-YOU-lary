import {
  getAsyncVocab, getHtmltVocab, getJavaScriptVocab, getStudyCornerVocab, getVocab
} from '../../api/vocabData';
import { noVocab, showVocab } from '../../pages/words';
import { signOut } from '../../utils/auth';
import { clearDom } from '../../utils/clearDom';

const navEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#all-words-btn').addEventListener('click', () => {
    clearDom();

    getVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        noVocab();
      }
    });
  });

  document.querySelector('#js-vocab').addEventListener('click', () => {
    getJavaScriptVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        noVocab();
      }
    });
  });

  document.querySelector('#html-btn').addEventListener('click', () => {
    getHtmltVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        noVocab();
      }
    });
  });

  document.querySelector('#async-btn').addEventListener('click', () => {
    getAsyncVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        noVocab();
      }
    });
  });

  document.querySelector('#study-corner-btn').addEventListener('click', () => {
    getStudyCornerVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        noVocab();
      }
    });
  });
};

export default navEvents;
