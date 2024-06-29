const categoryBackground = document.querySelector('.category');
const mouseBg = document.querySelector('.mouse--backgruond');

categoryBackground.addEventListener('mousemove', curBg, false);
categoryBackground.addEventListener('mouseleave', curBgNone, false);

function curBg(e) {
  console.log(e)
  mouseBg.style.display = 'block';
  mouseBg.style.left = (e.clientX - 15) + 'px';
  mouseBg.style.top = (e.clientY - 10) + 'px';
}

function curBgNone() {
  mouseBg.style.display = 'none';
}