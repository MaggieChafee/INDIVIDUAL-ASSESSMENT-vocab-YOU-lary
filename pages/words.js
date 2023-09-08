import { clearDom } from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const noVocab = () => {
  const domString = '<h3>No Words Available.</h3>';
  renderToDom('#card-container', domString);
};

const showVocab = (array) => {
  clearDom();

  let btnString = '';

  btnString += `
  <button type="button" class="btn btn-dark" id="js-vocab">JavaScript</button>
  <button type="button" class="btn btn-dark" id="html-btn">HTML and CSS</button>
  <button type="button" class="btn btn-dark" id="async-btn">Asynchronous Programming</button>
  `;
  renderToDom('#buttons', btnString);

  let domString = '';

  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-header">
      <h5>${item.word}</h5>
    </div>
    <div class="card-body">
      <div class="card-text">
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
        <p class="card-text">${item.definition}</p>
      </div>
        <p class="sc-icon">${item.studyCorner ? '<span><i class="fas fa-star fa-lg" style="color: #bfe4ff;"></i></span>' : ''}</p>
      <div id="individual-card-btns">
        <a id="edit-card--${item.firebaseKey}" href="#" class="btn btn-edit">Edit</a>
        <a id="delete-card--${item.firebaseKey}" href="#" class="btn btn-delete">Delete</a>
      </div>
    </div>
  </div>`;
  });

  renderToDom('#card-container', domString);
};

export { noVocab, showVocab };
