import {
  deleteVocab, getAsyncVocab, getHtmltVocab, getJavaScriptVocab, getSingleVocab, getVocab
} from '../../api/vocabData';
import { noVocab, showVocab } from '../../pages/words';
import addWordForm from '../forms/addWordForm';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((obj) => addWordForm(obj));
    }

    if (e.target.id.includes('js-vocab')) {
      getJavaScriptVocab(user.uid).then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          noVocab();
        }
      });
    }

    if (e.target.id.includes('html-btn')) {
      getHtmltVocab(user.uid).then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          noVocab();
        }
      });
    }

    if (e.target.id.includes('async-btn')) {
      getAsyncVocab(user.uid).then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          noVocab();
        }
      });
    }
  });
};

export default domEvents;
