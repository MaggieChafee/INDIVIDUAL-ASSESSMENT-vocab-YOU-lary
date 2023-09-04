import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const noVocab = () => {
  const domString = '<h3>No Words Available.</h3>';
  renderToDom('#card-container', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';

  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">${item.word}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
      <p class="card-text">${item.definition}</p>
      <p>${item.studyCorner ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</p>
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
