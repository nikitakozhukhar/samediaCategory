const container = document.querySelector('.container');

function toggleImagesVisibility(element, showPrimary) {
  const primaryImg = element.querySelector('.card__img');
  const secondaryImg = element.querySelector('.card__img2');

  if (primaryImg && secondaryImg) {
    primaryImg.style.display = showPrimary ? 'block' : 'none';
    secondaryImg.style.display = showPrimary ? 'none' : 'block';
  }
}

const cardClasses = ['card--pestizzides', 'card--culture', 'card--pests', 'card--crystalLattice'];

container.addEventListener('mouseover', e => {
  const leaf = document.querySelector('.category__decor--leaf');
  const leaf2 = document.querySelector('.category__decor--leaf2');

  const card = e.target.closest('.card')
  if (card) {
    const className = card.classList[1];
    switch (className) {
      case 'card--pestizzides':
        leaf.style.transform = 'translate(2px, 2px)';
        leaf2.style.transform = 'translate(2px, 2px)';
        break
      case 'card--culture':
        leaf.style.transform = 'translate(4px, 4px)';
        leaf2.style.transform = 'translate(4px, 4px)';
        break
      case 'card--pests':
        leaf.style.transform = 'translate(6px, 6px)';
        leaf2.style.transform = 'translate(6px, 6px)';
        break
      case 'card--crystalLattice':
        leaf.style.transform = 'translate(8px, 8px)';
        leaf2.style.transform = 'translate(8px, 8px)';
        break
      default:
        leaf.style.transform = 'translate(0, 0)';
        leaf2.style.transform = 'translate(0, 0)';
        break;
    }
  }

  cardClasses.forEach(cardClass => {
    const card = e.target.closest(`.${cardClass}`);
    if (card) {
      toggleImagesVisibility(card, false);
    }
  });
});

container.addEventListener('mouseout', e => {
  const leaf = document.querySelector('.category__decor--leaf');
  const leaf2 = document.querySelector('.category__decor--leaf2');

  cardClasses.forEach(cardClass => {
    const card = e.target.closest(`.${cardClass}`);
    if (card) {
      toggleImagesVisibility(card, true);
      leaf.style.transform = 'translate(0, 0)';
      leaf2.style.transform = 'translate(0, 0)';
    }
  });
});





