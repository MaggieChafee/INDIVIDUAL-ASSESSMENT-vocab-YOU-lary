import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const noWords = () => {
  const domString = '<h3>No Words Available.</h3>';
  renderToDom('card-container', domString);
};

const showWords = (array) => {
  clearDom();

  let domString = '';

  array.forEach((element) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.word}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${element.category}</h6>
      <p class="card-text">${element.definition}</p>
      <p>${element.studyCorner ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</p>
      <div id="individual-card-btns">
        <a id="edit-card--${element.firebaseKey}" href="#" class="btn btn-primary">Edit</a>
        <a id="delete-card--${element.firebaseKey}" href="#" class="btn btn-primary">Delete</a>
      </div>
    </div>
  </div>`;
  });

  renderToDom('#card-container', domString);
};

export { noWords, showWords };
