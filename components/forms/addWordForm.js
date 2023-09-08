import { clearDom } from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-word'}">
  <div class="mb-3">
    <label class="form-label">Vocabulary Word</label>
    <input type="text" class="form-control" id="vocab-word" aria-describedby="vocab-word" value="${obj.word || ''}">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Definition</label>
    <textarea class="form-control" id="vocab-definition" rows="3" value="${obj.definition || ''}"></textarea>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="studyCornerCheck" ${obj.studyCorner ? 'checked' : ''}>
    <label class="form-check-label" for="studyCorner">Add to Study Corner?</label>
  </div>
  <div class="input-group mb-3">
    <select class="form-select" id="word-form-category" ${obj.category || ''}>
      <option selected>Choose...</option>
      <option value="JavaScript">JavaScript</option>
      <option value="HTML and CSS">HTML and CSS</option>
      <option value="Asynchronous Programming">Asynchronous Programming</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  renderToDom('#form-container', domString);
};

export default addWordForm;
