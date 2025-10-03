let count = 0;
let perClick = 1;
let cursorCost = 10;

const cookieImg = document.getElementById('cookie');
const countSpan = document.getElementById('count');
const perSecondSpan = document.getElementById('perSecond');
const cursorBtn = document.getElementById('cursor');
const cursorCostSpan = document.getElementById('cursorCost');

cookieImg.addEventListener('click', () => {
  count += perClick;
  countSpan.textContent = count;
  animateCookie();
});

cursorBtn.addEventListener('click', () => {
  if (count >= cursorCost) {
    count -= cursorCost;
    perClick += 1;
    cursorCost = Math.floor(cursorCost * 1.5);
    countSpan.textContent = count;
    cursorCostSpan.textContent = cursorCost;
  } else {
    alert('Nigga');
  }
});

// Animation beim Klick
function animateCookie() {
  cookieImg.classList.add('clicked');
  setTimeout(() => {
    cookieImg.classList.remove('clicked');
  }, 120);
}

// Optional: perSecond-Feature (z.B. für Upgrades wie Grandma)
let perSecond = 0;
function autoClick() {
  count += perSecond;
  countSpan.textContent = count;
}
setInterval(autoClick, 1000);
perSecondSpan.textContent = perSecond;

