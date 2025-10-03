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
const saveBtn = document.getElementById('saveBtn');
const bakeryModal = document.getElementById('bakeryModal');
const bakeryNameInput = document.getElementById('bakeryNameInput');
const bakeryNameBtn = document.getElementById('bakeryNameBtn');
const bakeryTitle = document.getElementById('bakeryTitle');

// Debug: log which bakery elements exist (helps diagnose why confirm doesn't work)
console.log('bakery elements:', {
  bakeryModal: !!bakeryModal,
  bakeryNameInput: !!bakeryNameInput,
  bakeryNameBtn: !!bakeryNameBtn,
  bakeryTitle: !!bakeryTitle
});

// Initial UI
function updateUI() {
  if (countSpan) countSpan.textContent = count;
  if (perSecondSpan) perSecondSpan.textContent = perSecond;
  if (cursorCostSpan) cursorCostSpan.textContent = cursorCost;
  if (grandmaCostSpan) grandmaCostSpan.textContent = grandmaCost;
  if (farmCostSpan) farmCostSpan.textContent = farmCost;
  if (factoryCostSpan) factoryCostSpan.textContent = factoryCost;
  if (mineCostSpan) mineCostSpan.textContent = mineCost;
  if (shipmentCostSpan) shipmentCostSpan.textContent = shipmentCost;
  if (alchemyCostSpan) alchemyCostSpan.textContent = alchemyCost;
  if (portalCostSpan) portalCostSpan.textContent = portalCost;
  refreshStoreUI();
}
updateUI();

// Cookie click
if (cookieImg) {
  cookieImg.addEventListener('click', () => {
    count += perClick;
    updateUI();
    animateCookie();
  });
}

// Cursor upgrade
if (cursorBtn) {
  cursorBtn.addEventListener('click', () => {
    if (count >= cursorCost) {
      count -= cursorCost;
      perClick += 1;
      cursorCost = Math.floor(cursorCost * 1.5);
      updateUI();
    }
  });
}

// Grandma upgrade
if (grandmaBtn) {
  grandmaBtn.addEventListener('click', () => {
    if (count >= grandmaCost) {
      count -= grandmaCost;
      perSecond += grandmaValue;
      grandmaCost = Math.floor(grandmaCost * 1.5);
      updateUI();
    }
  });
}

// Farm upgrade
if (farmBtn) {
  farmBtn.addEventListener('click', () => {
    if (count >= farmCost) {
      count -= farmCost;
      perSecond += farmValue;
      farmCost = Math.floor(farmCost * 1.5);
      updateUI();
    }
  });
}

// Factory upgrade
if (factoryBtn) {
  factoryBtn.addEventListener('click', () => {
    if (count >= factoryCost) {
      count -= factoryCost;
      perSecond += factoryValue;
      factoryCost = Math.floor(factoryCost * 1.5);
      updateUI();
    }
  });
}

// Mine upgrade
if (mineBtn) {
  mineBtn.addEventListener('click', () => {
    if (count >= mineCost) {
      count -= mineCost;
      perSecond += mineValue;
      mineCost = Math.floor(mineCost * 1.5);
      updateUI();
    }
  });
}

// Shipment upgrade
if (shipmentBtn) {
  shipmentBtn.addEventListener('click', () => {
    if (count >= shipmentCost) {
      count -= shipmentCost;
      perSecond += shipmentValue;
      shipmentCost = Math.floor(shipmentCost * 1.5);
      updateUI();
    }
  });
}

// Alchemy lab upgrade
if (alchemyBtn) {
  alchemyBtn.addEventListener('click', () => {
    if (count >= alchemyCost) {
      count -= alchemyCost;
      perSecond += alchemyValue;
      alchemyCost = Math.floor(alchemyCost * 1.5);
      updateUI();
    }
  });
}

// Portal upgrade
if (portalBtn) {
  portalBtn.addEventListener('click', () => {
    if (count >= portalCost) {
      count -= portalCost;
      perSecond += portalValue;
      portalCost = Math.floor(portalCost * 1.5);
      updateUI();
    }
  });
}

// Save function
function saveGame() {
  const saveData = {
    count,
    perClick,
    perSecond,
    cursorCost,
    grandmaCost,
    farmCost,
    factoryCost,
    mineCost,
    shipmentCost,
    alchemyCost,
    portalCost
  };
  localStorage.setItem('cookieClickerSave', JSON.stringify(saveData));
  saveBtn.textContent = 'Gespeichert!';
  setTimeout(() => saveBtn.textContent = 'Speichern', 1500);
}

// Update store item enabled/disabled state
function refreshStoreUI() {
  const items = [
    { btn: cursorBtn, cost: cursorCost, itemId: 'cursorItem' },
    { btn: grandmaBtn, cost: grandmaCost, itemId: 'grandmaItem' },
    { btn: farmBtn, cost: farmCost, itemId: 'farmItem' },
    { btn: factoryBtn, cost: factoryCost, itemId: 'factoryItem' },
    { btn: mineBtn, cost: mineCost, itemId: 'mineItem' },
    { btn: shipmentBtn, cost: shipmentCost, itemId: 'shipmentItem' },
    { btn: alchemyBtn, cost: alchemyCost, itemId: 'alchemyItem' },
    { btn: portalBtn, cost: portalCost, itemId: 'portalItem' }
  ];

  items.forEach(({btn, cost, itemId}) => {
    const el = document.getElementById(itemId);
    if (btn) {
      if (count >= cost) {
        btn.disabled = false;
        if (el) el.classList.remove('disabled');
      } else {
        btn.disabled = true;
        if (el) el.classList.add('disabled');
      }
    }
  });
}

// Load function
function loadGame() {
  const saveData = JSON.parse(localStorage.getItem('cookieClickerSave'));
  if (saveData) {
    count = saveData.count;
    perClick = saveData.perClick;
    perSecond = saveData.perSecond;
    cursorCost = saveData.cursorCost;
    grandmaCost = saveData.grandmaCost;
    farmCost = saveData.farmCost;
    factoryCost = saveData.factoryCost;
    mineCost = saveData.mineCost;
    shipmentCost = saveData.shipmentCost;
    alchemyCost = saveData.alchemyCost;
    portalCost = saveData.portalCost;
    updateUI();
  }
}

// Beim Laden der Seite Spielstand laden
loadGame();

// Speichern-Button
if (saveBtn) saveBtn.addEventListener('click', saveGame);

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

// Touch-Zoom auf dem Cookie verhindern
function preventZoomOnTouch(element) {
  element.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) e.preventDefault();
  }, { passive: false });
  element.addEventListener('dblclick', function(e) {
    e.preventDefault();
  });
}

// Für alle Buttons und Cookie anwenden
[
  cookieImg, cursorBtn, grandmaBtn, farmBtn, factoryBtn,
  mineBtn, shipmentBtn, alchemyBtn, portalBtn, saveBtn
].filter(Boolean).forEach(preventZoomOnTouch);

if (cookieImg) {
  cookieImg.addEventListener('click', (e) => {
    count += perClick;
    updateUI();
    animateCookie();

    // Animation mit Wert von perClick
    let rect = cookieImg.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;
    spawnCursorAnimation(x, y, perClick);
  });
}

// Cursor-Animation
function spawnCursorAnimation(x, y, value) {
  const cursor = document.createElement('div');
  cursor.textContent = '+' + value;
  cursor.style.position = 'fixed';
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
  cursor.style.fontSize = '2em';
  cursor.style.fontWeight = 'bold';
  cursor.style.color = '#fff';
  cursor.style.textShadow = '2px 2px 8px #000a';
  cursor.style.pointerEvents = 'none';
  cursor.style.transition = 'transform 0.8s cubic-bezier(.4,2,.3,1), opacity 0.8s';
  cursor.style.transform = 'translateY(0)';
  cursor.style.opacity = '1';
  cursor.style.zIndex = '1000';
  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.style.transform = 'translateY(-80px) scale(0.7)';
    cursor.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    cursor.remove();
  }, 900);
}

function setBakeryName(name) {
  localStorage.setItem('bakeryName', name);
  if (bakeryTitle) {
    bakeryTitle.textContent = name + "'s bakery";
  }
}

if (!localStorage.getItem('bakeryName')) {
  if (bakeryModal) bakeryModal.style.display = 'flex';
} else {
  setBakeryName(localStorage.getItem('bakeryName'));
  if (bakeryModal) bakeryModal.style.display = 'none';
}

if (bakeryNameBtn) {
  console.log('Attaching click handler to bakeryNameBtn');
  bakeryNameBtn.addEventListener('click', (ev) => {
    console.log('bakeryNameBtn clicked', ev);
    const name = (bakeryNameInput && bakeryNameInput.value) ? bakeryNameInput.value.trim() : '';
    if (name.length > 0) {
      setBakeryName(name);
      if (bakeryModal) bakeryModal.style.display = 'none';
      console.log('Bakery name set to:', name);
    } else {
      console.log('Bakery name empty, not setting');
    }
  });
} else if (bakeryNameInput) {
  // fallback: if button missing, allow Enter to confirm
  console.log('bakeryNameBtn missing — attaching Enter handler to bakeryNameInput');
  bakeryNameInput.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      const name = bakeryNameInput.value.trim();
      if (name.length > 0) {
        setBakeryName(name);
        if (bakeryModal) bakeryModal.style.display = 'none';
        console.log('Bakery name set via Enter:', name);
      }
    }
  });
}

