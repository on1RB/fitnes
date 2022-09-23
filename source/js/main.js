// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------

  const videoPlayer = document.querySelector('.gym__video-player');
  const overlay = document.querySelector('.gym__video-overlay');
  const videoButton = document.querySelector('.gym__button');

  const removeClassNojs = function (nameBlock) {
    const classNames = nameBlock.className.split(' ');
    nameBlock.classList.remove(classNames[0] + '--nojs');
  };

  if (overlay) {
    removeClassNojs(overlay);
  }

  if (videoPlayer) {
    removeClassNojs(videoPlayer);
  }

  if (videoButton) {
    removeClassNojs(videoButton);

    videoButton.addEventListener('click', () => {
      overlay.classList.add('gym__video-overlay--hidden');
      videoButton.classList.add('gym__button--hidden');
      videoPlayer.classList.remove('gym__video-player--hidden');
    });
  }

  const tabsNojs = document.querySelectorAll('.subscribe__inner');
  const tabsNojsList = Array.prototype.slice.call(tabsNojs);
  const subscribe = document.querySelectorAll('.subscribe__list');
  const subscribeList = Array.prototype.slice.call(subscribe);

  const removeTabsClassNojs = function (nameBlock) {
    const classNames = nameBlock.className.split(' ');
    if (nameBlock.classList.contains(classNames[0] + '--nojs')) {
      nameBlock.classList.remove(classNames[0] + '--nojs');
      nameBlock.classList.add(classNames[0] + '--hidden');
    }
  };

  if (tabsNojsList) {
    tabsNojsList.forEach((element) => {
      removeTabsClassNojs(element);
    });
  }

  if (subscribeList) {
    subscribeList.forEach((element) => {
      removeTabsClassNojs(element);
    });
  }

  const tabs = document.querySelectorAll('.subscribe__tabs-button');
  const tabsList = Array.prototype.slice.call(tabs);
  const firstMonth = document.querySelector('#first-month');
  const sixMonth = document.querySelector('#six-months');
  const twelveMonth = document.querySelector('#twelve-months');

  const addActiveClass = function (index) {
    tabsList.filter((_, i) => i !== index).forEach((element) => {
      element.classList.remove('subscribe__tabs-button--active');
    });
  };

  const switchesActiveElement = function (activeBlock, secondBlock, thirdBlock, currentIndex, index) {
    if (index === currentIndex) {
      activeBlock.classList.add('subscribe__list--active');
      secondBlock.classList.remove('subscribe__list--active');
      thirdBlock.classList.remove('subscribe__list--active');
      activeBlock.classList.remove('subscribe__list--hidden');
    } else {
      activeBlock.classList.remove('subscribe__list--active');
      activeBlock.classList.remove('subscribe__list--hidden');
    }
  };

  if (tabsList) {
    tabsList.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.classList.add('subscribe__tabs-button--active');
        addActiveClass(index);
        switchesActiveElement(firstMonth, sixMonth, twelveMonth, 0, index);
        switchesActiveElement(sixMonth, firstMonth, twelveMonth, 1, index);
        switchesActiveElement(twelveMonth, firstMonth, sixMonth, 2, index);
      });
    });
  }

  const trainersSliderContainer = document.querySelector('.trainers__slider');
  const trainersSlider = document.querySelector('.trainers__swiper');
  const trainersSliderContent = document.querySelector('.trainers__content');
  const trainersButton = document.querySelectorAll('.trainers__button');
  const trainersButtonList = Array.prototype.slice.call(trainersButton);

  if (trainersSliderContainer) {
    removeClassNojs(trainersSliderContainer);
  }

  if (trainersSlider) {
    removeClassNojs(trainersSlider);
  }

  if (trainersSliderContent) {
    removeClassNojs(trainersSliderContent);
  }

  if (trainersButtonList) {
    trainersButtonList.forEach((element) => {
      removeClassNojs(element);
    });
  }

  const swiperTrainers = new Swiper('.swiper.trainers__swiper', {
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 30,
      },

      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        initialSlide: 0,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });

  const swiperRewiews = new Swiper('.swiper.reviews__swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });

  const rewiewsSlider = document.querySelector('.reviews__slider');
  const rewiewsContent = document.querySelector('.reviews__content');
  const rewiewsCard = document.querySelectorAll('.reviews__card');
  const rewiewsCardList = Array.prototype.slice.call(rewiewsCard);
  const rewiewsButton = document.querySelectorAll('.reviews__button');
  const rewiewsButtonList = Array.prototype.slice.call(rewiewsButton);

  if (rewiewsSlider) {
    removeClassNojs(rewiewsSlider);
  }

  if (rewiewsContent) {
    removeClassNojs(rewiewsContent);
  }

  if (rewiewsCardList) {
    rewiewsCardList.forEach((element) => {
      removeClassNojs(element);
    });
  }

  if (rewiewsButtonList) {
    rewiewsButtonList.forEach((element) => {
      removeClassNojs(element);
    });
  }

  window.addEventListener('load', () => {
  });
});
