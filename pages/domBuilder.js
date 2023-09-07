import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="buttons"></div>
    <div id="form-container">
      <button type="button" class="btn btn-light" id="add-word-btn">Add Word</button>
    </div>
    <div id="card-container"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
