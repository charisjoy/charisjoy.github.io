// show more | show less button
const buttons = document.querySelectorAll('.button-show-more');

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener(
    'click',
    function () {
      const elem = this.parentNode.firstElementChild.nextElementSibling;

      if (elem.style.display === 'none' || elem.style.display === '') {
        elem.style.display = 'block';
        this.textContent = 'Show less';
      } else {
        elem.style.display = 'none';
        this.textContent = 'Show more';
      }
    }
  );
}

window.onscroll = function () {
  // sticky top navigation
  function stick() {
    const main = document.querySelector('main');
    const navbar = document.querySelector('.simple-sticky');

    if (main.getBoundingClientRect().y < 80) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  stick();
};
