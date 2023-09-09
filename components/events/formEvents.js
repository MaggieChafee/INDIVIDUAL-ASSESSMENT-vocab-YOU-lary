import { createVocab, getVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/words';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      const dateSubmitted = new Date();
      const date = dateSubmitted.toLocaleString();
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        studyCorner: document.querySelector('#studyCorner').checked,
        category: document.querySelector('#category').value,
        timeSubmitted: date,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        studyCorner: document.querySelector('#studyCorner').checked,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
