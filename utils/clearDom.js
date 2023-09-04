const clearDom = () => {
  document.querySelector('#buttons').innerHTML = '';
  document.querySelector('#form-container').innterHTML = '';
  document.querySelector('#card-container').innerHTML = '';
};

export default clearDom;
