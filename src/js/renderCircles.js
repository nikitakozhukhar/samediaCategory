
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const circles = document.createElement('div');
  circles.classList.add('circles');

  for (let i = 1; i <= 4; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle', `circle${i}`)
    circles.appendChild(circle)
  }
  card.appendChild(circles)
})