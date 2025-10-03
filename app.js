let count = 0;
const cookieBtn = document.getElementById('cookie');
const countSpan = document.getElementById('count');

cookieBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
});

