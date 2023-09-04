import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="buttons"></div>
    <div id="form-container"></div>
    <div id="card-container"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
