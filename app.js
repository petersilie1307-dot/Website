let count = 0;
let perClick = 1;
let cursorCost = 10;

const cookieBtn = document.getElementById('cookie');
const countSpan = document.getElementById('count');
const perClickSpan = document.getElementById('perClick');
const cursorBtn = document.getElementById('cursor');
const cursorCostSpan = document.getElementById('cursorCost');

cookieBtn.addEventListener('click', () => {
  count += perClick;
  countSpan.textContent = count;
});

cursorBtn.addEventListener('click', () => {
  if (count >= cursorCost) {
    count -= cursorCost;
    perClick += 1;
    cursorCost = Math.floor(cursorCost * 1.5);
    countSpan.textContent = count;
    perClickSpan.textContent = perClick;
    cursorCostSpan.textContent = cursorCost;
  } else {
    alert('Nigga');
  }
});

