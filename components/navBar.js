import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="all-words-btn">All Words</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="add-word-btn">Create Entry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="study-corner-btn">Study Corner</a>
        </li>                
      </ul>
      <div id="logout-button"></div>
    </div>
  </div>
</nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
