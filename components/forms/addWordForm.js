import { clearDom } from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-word'}">
  <div class="mb-3">
    <label class="form-label">Vocabulary Word</label>
    <input type="text" class="form-control" id="word" aria-describedby="vocab-word" value="${obj.word || ''}">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Definition</label>
    <input type="text" class="form-control" id="definition" aria-describedby="definition" value="${obj.definition || ''}"></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="studyCorner" ${obj.studyCorner ? 'checked' : ''}>
    <label class="form-check-label" for="studyCorner">Add to Study Corner?</label>
  </div>
  <div class="input-group mb-3">
    <select class="form-select" id="category" ${obj.category || ''}>
      <option selected>Choose...</option>
      <option value="JavaScript">JavaScript</option>
      <option value="HTML and CSS">HTML and CSS</option>
      <option value="Asynchronous Programming">Asynchronous Programming</option>
    </select>
  </div>
  <button type="submit" class="btn btn-dark">Submit</button>
</form>`;

  renderToDom('#form-container', domString);
};

export default addWordForm;
