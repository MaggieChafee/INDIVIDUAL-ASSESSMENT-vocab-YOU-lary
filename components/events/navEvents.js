import { signOut } from '../../utils/auth';

const navEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
};

export default navEvents;
