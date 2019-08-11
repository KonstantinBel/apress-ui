import './style.scss';
import template from './temaplate.handlebars';

export default (text) => {
  fetch('/qweasd')
    .then(() => {
      document.body.innerHTML = template({ text });
    })
};
