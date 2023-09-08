import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  let domString = '';
  domString += `
  <div id="welcome">
    <h3>Welcome to Vocab-YOU-lary!</h3>
    <button id="google-auth" class="btn btn-dark">GOOGLE LOGIN</button>
  </div>
  `;
  document.querySelector('#main-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
