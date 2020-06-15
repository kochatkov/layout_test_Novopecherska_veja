'use strict';

const button = document.querySelector('.menu');
const menu = document.querySelector('.menu__menu');
const closeMenu = document.querySelector('.menu__close');
const phoneBlock = document.querySelector('.header__download');
const presentationButton = document.querySelector('.buildings');
const presentation = document.querySelector('.buildings__presentation');

presentationButton.addEventListener('click', () => {
  presentation.classList.toggle('buildings__presentation-show');
});

button.addEventListener('click', () => {
  menu.classList.add('menu__menu-show');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu__menu-show');
});

const transform = () => {
  phoneBlock.style.transform = `translateX(-20px)`;
  phoneBlock.style.transition = '1s';
  document.removeEventListener('scroll', transform);
};

document.addEventListener('scroll', transform);

document.addEventListener('DOMContentLoaded', () => {
  const yellowBlock = document.querySelector('.about__build-yellow');
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        yellowBlock.style.transform = `translateX(0)`;
      }
    });
  });

  observer1.observe(yellowBlock);

  const yellowLine = document.querySelector('.ready__visual-line-long');
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        yellowLine.style.transform = 'translateX(100%)';
      }
      ;
    });
  });

  observer2.observe(yellowLine);

  const counters = document.querySelectorAll('.prices__counter');
  const speed = 200;

  counters.forEach(counter => {
    const counterObserve = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = Math.ceil(target / speed);

            if (count > target) {
              counter.innerText = target;
            } else if (count < target) {
              counter.innerText = count + inc;
              setTimeout(updateCount, 1);
            }
          };

          updateCount();
        }
      });
    });

    counterObserve.observe(counter);
  });

  const galleryImage = document.querySelector('.value__img');
  const imageObserve = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        galleryImage.style.transform = 'translate(10px, -10px)';
      }
    });
  });

  imageObserve.observe(galleryImage);

  const installmentImage = document.querySelector('.installment__image');
  const installmentImageObserve = new IntersectionObserver(entries => {
    entries.forEach(enty => {
      if (enty.isIntersecting) {
        installmentImage.style.transform = 'translateX(0)';
      }
    });
  });

  installmentImageObserve.observe(installmentImage);

  const whiteLine = document.querySelector('.house__white');
  const whiteLineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        whiteLine.style.opacity = '0';
      }
    });
  });

  whiteLineObserver.observe(whiteLine);
});
