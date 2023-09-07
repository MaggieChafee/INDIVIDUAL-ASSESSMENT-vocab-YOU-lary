import { createVocab, getVocab, updateVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/words';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      console.warn('submit check');
      const dateSubmitted = new Date();
      const date = dateSubmitted.toLocaleString();
      const payload = {
        word: document.querySelector('#vocab-word').value,
        definition: document.querySelector('#vocab-definition').value,
        studyCorner: document.querySelector('#studyCornerCheck').checked,
        category: document.querySelector('#word-form-category').value,
        timeSubmitted: date,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebase: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }
  });
};

export default formEvents;
