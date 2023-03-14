function dropDown() {
  if (document.querySelector('[data-showOrHide-parent]')) {
    let aboutSection = document.querySelector('[data-showOrHide-parent]');
    let moreButton = aboutSection.querySelector('[data-showOrHide-button]');
    let paragraphs = aboutSection.querySelectorAll('[data-showOrHide-element]');
    let mobileSpan = aboutSection.querySelector('[data-showOrHide-span]');
    let breakpoint = window.matchMedia('(max-width: 769px)');

    let breakpointChecker = () => {
      if (breakpoint.matches) {
        mobileSpan.style.display = 'none';
      } else {
        mobileSpan.style.display = 'block';
      }
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();

    for (let paragraph of paragraphs) {
      paragraph.style.display = 'none';
    }
    moreButton.style.display = 'block';

    let showText = () => {
      if (getComputedStyle(mobileSpan).display === 'none') {
        mobileSpan.style.display = 'block';
      } else {
        if (breakpointChecker()) {
          mobileSpan.style.display = 'none';
        }
      }

      for (let paragraph of paragraphs) {
        if (getComputedStyle(paragraph).display === 'none') {
          paragraph.style.display = 'inline-block';
          moreButton.textContent = 'Свернуть';
        } else {
          paragraph.style.display = 'none';
          moreButton.textContent = 'Подробнее';
        }
      }
    };

    moreButton.addEventListener('click', showText);
  }
}

export {dropDown};
