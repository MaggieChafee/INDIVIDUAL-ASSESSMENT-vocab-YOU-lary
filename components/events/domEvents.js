import { deleteVocab, getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/words';
import addWordForm from '../forms/addWordForm';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-word-btn')) {
      addWordForm(user.uid);
    }

    if (e.target.id.includes('delete-card')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
  });
};

export default domEvents;
