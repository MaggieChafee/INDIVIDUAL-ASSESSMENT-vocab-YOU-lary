import { signOut } from '../utils/auth';
import { clearDom, clearNav } from '../utils/clearDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-dark">Signout</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', () => {
    signOut();
    clearDom();
    clearNav();
  });
};

export default logoutButton;
