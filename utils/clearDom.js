const clearDom = () => {
  document.querySelector('#buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
};

const clearNav = () => {
  document.querySelector('#navigation').innerHTML = '';
};

const clearLogin = () => {
  document.querySelector('#login-form-container').innerHTML = '';
};

export { clearDom, clearNav, clearLogin };
