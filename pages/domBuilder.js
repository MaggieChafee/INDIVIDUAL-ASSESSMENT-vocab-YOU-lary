import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-btns"></div>
    <div id="form-container"></div>
    <div id="card-container">Does this work?</div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
