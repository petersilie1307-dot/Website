let count = 0;
let perClick = 1;
let perSecond = 0;

// Upgrade costs
let cursorCost = 10;
let grandmaCost = 100;
let farmCost = 1100;
let factoryCost = 12000;
let mineCost = 130000;
let shipmentCost = 1400000;
let alchemyCost = 20000000;
let portalCost = 330000000;

// Upgrade values
let grandmaValue = 1;
let farmValue = 8;
let factoryValue = 47;
let mineValue = 260;
let shipmentValue = 1400;
let alchemyValue = 7800;
let portalValue = 44000;

// DOM Elements
const cookieImg = document.getElementById('cookie');
const countSpan = document.getElementById('count');
const perSecondSpan = document.getElementById('perSecond');
const cursorBtn = document.getElementById('cursor');
const cursorCostSpan = document.getElementById('cursorCost');
const grandmaBtn = document.getElementById('grandma');
const grandmaCostSpan = document.getElementById('grandmaCost');
const farmBtn = document.getElementById('farm');
const farmCostSpan = document.getElementById('farmCost');
const factoryBtn = document.getElementById('factory');
const factoryCostSpan = document.getElementById('factoryCost');
const mineBtn = document.getElementById('mine');
const mineCostSpan = document.getElementById('mineCost');
const shipmentBtn = document.getElementById('shipment');
const shipmentCostSpan = document.getElementById('shipmentCost');
const alchemyBtn = document.getElementById('alchemy');
const alchemyCostSpan = document.getElementById('alchemyCost');
const portalBtn = document.getElementById('portal');
const portalCostSpan = document.getElementById('portalCost');

// Initial UI
function updateUI() {
  countSpan.textContent = count;
  perSecondSpan.textContent = perSecond;
  cursorCostSpan.textContent = cursorCost;
  grandmaCostSpan.textContent = grandmaCost;
  farmCostSpan.textContent = farmCost;
  factoryCostSpan.textContent = factoryCost;
  mineCostSpan.textContent = mineCost;
  shipmentCostSpan.textContent = shipmentCost;
  alchemyCostSpan.textContent = alchemyCost;
  portalCostSpan.textContent = portalCost;
}
updateUI();

// Cookie click
cookieImg.addEventListener('click', () => {
  count += perClick;
  updateUI();
  animateCookie();
});

// Cursor upgrade
cursorBtn.addEventListener('click', () => {
  if (count >= cursorCost) {
    count -= cursorCost;
    perClick += 1;
    cursorCost = Math.floor(cursorCost * 1.5);
    updateUI();
  }
});

// Grandma upgrade
grandmaBtn.addEventListener('click', () => {
  if (count >= grandmaCost) {
    count -= grandmaCost;
    perSecond += grandmaValue;
    grandmaCost = Math.floor(grandmaCost * 1.5);
    updateUI();
  }
});

// Farm upgrade
farmBtn.addEventListener('click', () => {
  if (count >= farmCost) {
    count -= farmCost;
    perSecond += farmValue;
    farmCost = Math.floor(farmCost * 1.5);
    updateUI();
  }
});

// Factory upgrade
factoryBtn.addEventListener('click', () => {
  if (count >= factoryCost) {
    count -= factoryCost;
    perSecond += factoryValue;
    factoryCost = Math.floor(factoryCost * 1.5);
    updateUI();
  }
});

// Mine upgrade
mineBtn.addEventListener('click', () => {
  if (count >= mineCost) {
    count -= mineCost;
    perSecond += mineValue;
    mineCost = Math.floor(mineCost * 1.5);
    updateUI();
  }
});

// Shipment upgrade
shipmentBtn.addEventListener('click', () => {
  if (count >= shipmentCost) {
    count -= shipmentCost;
    perSecond += shipmentValue;
    shipmentCost = Math.floor(shipmentCost * 1.5);
    updateUI();
  }
});

// Alchemy lab upgrade
alchemyBtn.addEventListener('click', () => {
  if (count >= alchemyCost) {
    count -= alchemyCost;
    perSecond += alchemyValue;
    alchemyCost = Math.floor(alchemyCost * 1.5);
    updateUI();
  }
});

// Portal upgrade
portalBtn.addEventListener('click', () => {
  if (count >= portalCost) {
    count -= portalCost;
    perSecond += portalValue;
    portalCost = Math.floor(portalCost * 1.5);
    updateUI();
  }
});

// Animation beim Klick
function animateCookie() {
  cookieImg.classList.add('clicked');
  setTimeout(() => {
    cookieImg.classList.remove('clicked');
  }, 120);
}

// Auto-Cookies pro Sekunde
setInterval(() => {
  count += perSecond;
  countSpan.textContent = count;
}, 1000);

