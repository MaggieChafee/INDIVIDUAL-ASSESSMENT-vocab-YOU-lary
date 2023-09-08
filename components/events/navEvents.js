import {
  getStudyCornerVocab, getVocab
} from '../../api/vocabData';
import { noVocab, showVocab } from '../../pages/words';
import { signOut } from '../../utils/auth';
import { clearDom } from '../../utils/clearDom';
import addWordForm from '../forms/addWordForm';

const navEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-word-btn').addEventListener('click', () => {
    addWordForm(user.uid);
  });

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
