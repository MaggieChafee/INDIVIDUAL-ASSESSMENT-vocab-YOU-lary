import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="userId"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json)
    .then(resolve)
    .catch(reject);
});

const getJavaScriptVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="category"&equalTo="JavaScript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json)
    .then((data) => resolve(data))
    .catch(reject);
});

export { getVocab, deleteVocab, getJavaScriptVocab };
