const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const textEl = button.querySelector('.button__text');
  if (heart.classList.contains('is-liked')) {
    setTimeout(() => (textEl.textContent = 'Unlike'), 500);
  } else {
    setTimeout(() => (textEl.textContent = 'Like'), 500);
  }
}

function changeTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) changeTheme(saved);
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.theme-menu__button');

  function setDisabled(theme) {
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-theme') === theme) {
        btn.setAttribute('disabled', true);
      } else {
        btn.removeAttribute('disabled');
      }
    });
  }

  const current = [...root.classList].find(cls => cls.startsWith('theme-'))?.slice(6) || 'auto';
  setDisabled(current);

  buttons.forEach((btn) => {
    btn.onclick = () => {
      const theme = btn.getAttribute('data-theme');
      changeTheme(theme);
      setDisabled(theme);
    };
  });
});
