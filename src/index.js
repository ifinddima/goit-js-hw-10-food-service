import './styles.css';
import menu from './menu.json';
import foodsCard from '../templates/foods-card.hbs';

const refs = {
  body: document.querySelector('body'),
  switchTheme: document.querySelector('#theme-switch-toggle'),
  jsMenu: document.querySelector('.js-menu'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuCards = foodsCard(menu);
refs.jsMenu.insertAdjacentHTML('beforeend', menuCards);

refs.switchTheme.addEventListener('change', switchTheme);

if (localStorage.getItem('Theme') === 'DARK') {
  refs.switchTheme.checked = true;
  refs.body.classList.add(Theme.DARK);
}

function switchTheme(e) {
  const checked = e.currentTarget.checked;
  if (checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', 'DARK');
  }
  if (!checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.removeItem('Theme');
  }
}
