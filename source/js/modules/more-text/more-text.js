function showOrHide() {
  let aboutSection = document.querySelector('[data-showOrHide-parent]');
  let moreButton = aboutSection.querySelector('[data-showOrHide-button]');
  let paragraphs = aboutSection.querySelectorAll('[data-showOrHide-element]');

  for (let paragraph of paragraphs) {
    paragraph.style.display = 'none';
  }
  moreButton.style.display = 'block';

  function showText() {
    for (let paragraph of paragraphs) {
      if (getComputedStyle(paragraph).display === 'none') {
        paragraph.style.display = 'inline-block';
        moreButton.textContent = 'Свернуть';
      } else {
        paragraph.style.display = 'none';
        moreButton.textContent = 'Подробнее';
      }
    }
  }

  moreButton.addEventListener('click', showText);
}

export {showOrHide};
