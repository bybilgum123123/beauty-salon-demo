const priceData = {
  nails: { title: 'Нігті', items: [['Манікюр без покриття', 'Форма, кутикула, догляд', '650 ₴'], ['Манікюр з гель-покриттям', 'Однотонне покриття', '950 ₴'], ['Педикюр без покриття', 'Догляд за стопами', '850 ₴'], ['Педикюр з гель-покриттям', 'Повний комплекс', '1 150 ₴']] },
  brows: { title: 'Брови та вії', items: [['Корекція брів', 'Форма під ваші риси', '450 ₴'], ['Фарбування брів', 'Стійкий природний відтінок', '550 ₴'], ['Ламінування брів', 'Укладка та догляд', '850 ₴'], ['Ламінування вій', 'Виразний вигин', '950 ₴']] },
  hair: { title: 'Волосся', items: [['Укладка', 'Легка форма на щодень', 'від 700 ₴'], ['Вечірня зачіска', 'Образ для події', 'від 1 400 ₴'], ['Догляд і відновлення', 'Підбір за типом волосся', 'від 1 100 ₴'], ['Стрижка жіноча', 'Консультація та укладка', 'від 900 ₴']] },
  face: { title: 'Обличчя', items: [['Зволожувальний догляд', 'Комфорт і сяйво', '1 100 ₴'], ['Делікатне очищення', 'Підбір за станом шкіри', '1 350 ₴'], ['Масаж обличчя', 'Релакс і тонус', '900 ₴'], ['Персональний догляд', 'Консультація фахівця', 'від 1 500 ₴']] },
  makeup: { title: 'Макіяж', items: [['Денний макіяж', 'Легкий природний образ', '1 100 ₴'], ['Вечірній макіяж', 'Акцент для події', '1 600 ₴'], ['Весільний макіяж', 'З пробним образом', 'від 2 500 ₴'], ['Експрес-макіяж', 'Коли час має значення', '800 ₴']] }
};

const tabs = [...document.querySelectorAll('.price-tab')];
const pricePanel = document.querySelector('.price-panel');
const priceRows = document.querySelector('.price-rows');
const priceTabList = document.querySelector('.price-tabs');
const compactPrices = matchMedia('(max-width: 760px)');
const setTabOrientation = () => priceTabList.setAttribute('aria-orientation', compactPrices.matches ? 'horizontal' : 'vertical');
compactPrices.addEventListener('change', setTabOrientation);
setTabOrientation();
function setCategory(category, focus = false) {
  const data = priceData[category];
  const index = Object.keys(priceData).indexOf(category);
  pricePanel.setAttribute('aria-labelledby', `tab-${category}`);
  tabs.forEach(tab => {
    const active = tab.dataset.category === category;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus({ preventScroll: true });
  });
  pricePanel.querySelector('h3').textContent = data.title;
  pricePanel.querySelector('.price-panel-top span:last-child').textContent = `0${index + 1} / 05`;
  priceRows.replaceChildren(...data.items.map(([name, note, price]) => {
    const row = document.createElement('div');
    row.className = 'price-row';
    const label = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'price-row-name';
    title.textContent = name;
    const detail = document.createElement('div');
    detail.className = 'price-row-note';
    detail.textContent = note;
    label.append(title, detail);
    const dots = document.createElement('span');
    dots.className = 'price-row-dots';
    dots.setAttribute('aria-hidden', 'true');
    const amount = document.createElement('span');
    amount.className = 'price-row-price';
    const match = price.match(/^(від\s+)?([\d ]+)\s*₴$/);
    if (match) {
      if (match[1]) {
        const prefix = document.createElement('small');
        prefix.className = 'price-prefix';
        prefix.textContent = 'від';
        amount.append(prefix);
      }
      const number = document.createElement('strong');
      number.className = 'price-amount';
      number.textContent = match[2].trim();
      const currency = document.createElement('small');
      currency.className = 'price-currency';
      currency.textContent = '₴';
      amount.append(number, currency);
    } else amount.textContent = price;
    row.append(label, dots, amount);
    return row;
  }));
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setCategory(tab.dataset.category));
  tab.addEventListener('keydown', event => {
    const arrows = compactPrices.matches ? ['ArrowLeft', 'ArrowRight'] : ['ArrowUp', 'ArrowDown'];
    if (![...arrows, 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === arrows[1] ? 1 : -1) + tabs.length) % tabs.length;
    setCategory(tabs[next].dataset.category, true);
  });
});
setCategory('nails');

const header = document.querySelector('.site-header');
const heroStage = document.querySelector('#hero-stage');
const hero = heroStage.querySelector('.hero');
const heroVideo = heroStage.querySelector('.hero-video');
const heroVideoSource = heroVideo.querySelector('source');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileHero = window.matchMedia('(max-width: 760px)');
const motionButton = document.querySelector('.hero-motion-toggle');
const saveData = navigator.connection?.saveData;
let videoPausedByUser = false;
const updateHeader = () => header.classList.toggle('is-scrolled', heroStage.getBoundingClientRect().bottom <= header.offsetHeight + 2);
let heroTick = 0;
function updateHeroMotion() {
  heroTick = 0;
  updateHeader();
  if (reducedMotion.matches || mobileHero.matches) {
    heroStage.style.setProperty('--hero-progress', '0');
    return;
  }
  const range = Math.max(1, heroStage.offsetHeight - hero.offsetHeight);
  const progress = Math.min(1, Math.max(0, -heroStage.getBoundingClientRect().top / range));
  const eased = progress * progress * (3 - 2 * progress);
  heroStage.style.setProperty('--hero-progress', eased.toFixed(4));
}
function requestHeroMotion() {
  if (!heroTick) heroTick = requestAnimationFrame(updateHeroMotion);
}
window.addEventListener('scroll', requestHeroMotion, { passive: true });
window.addEventListener('resize', requestHeroMotion, { passive: true });
reducedMotion.addEventListener('change', requestHeroMotion);
mobileHero.addEventListener('change', requestHeroMotion);
function syncHeroVideo() {
  motionButton.hidden = reducedMotion.matches || saveData || !heroStage.classList.contains('video-ready');
  if (videoPausedByUser || reducedMotion.matches || saveData || document.hidden || !heroStage.classList.contains('is-active') || !heroVideoSource.src) {
    heroVideo.pause();
  } else {
    heroVideo.play().catch(() => {});
  }
}
function loadHeroVideo() {
  if (reducedMotion.matches || saveData || heroVideoSource.src) return;
  heroVideoSource.src = heroVideoSource.dataset.src;
  heroVideo.load();
  syncHeroVideo();
}
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    heroStage.classList.toggle('is-active', entry.isIntersecting);
    document.body.classList.toggle('hero-in-view', entry.isIntersecting);
    syncHeroVideo();
  }, { rootMargin: '0px' }).observe(hero);
} else { heroStage.classList.add('is-active'); document.body.classList.add('hero-in-view'); }
reducedMotion.addEventListener('change', () => { loadHeroVideo(); syncHeroVideo(); });
document.addEventListener('visibilitychange', syncHeroVideo);
heroVideo.addEventListener('loadeddata', () => { heroStage.classList.add('video-ready'); syncHeroVideo(); });
const showVideoFallback = () => { heroStage.classList.remove('video-ready'); motionButton.hidden = true; };
heroVideo.addEventListener('error', showVideoFallback);
heroVideoSource.addEventListener('error', showVideoFallback);
motionButton.addEventListener('click', () => {
  videoPausedByUser = !videoPausedByUser;
  motionButton.textContent = videoPausedByUser ? 'Відтворити' : 'Пауза';
  motionButton.setAttribute('aria-pressed', String(videoPausedByUser));
  motionButton.setAttribute('aria-label', videoPausedByUser ? 'Відтворити фонове відео' : 'Призупинити фонове відео');
  syncHeroVideo();
});
updateHeroMotion();
requestAnimationFrame(() => requestAnimationFrame(loadHeroVideo));

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const pageContent = [document.querySelector('main'), document.querySelector('footer'), document.querySelector('.mobile-book')];
let menuScrollPosition = 0;
function closeMenu({ restoreFocus = true } = {}) {
  if (mobileNav.hidden) return;
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Відкрити меню');
  header.classList.remove('menu-open');
  document.body.classList.remove('menu-open');
  document.body.style.top = '';
  pageContent.forEach(element => { element.inert = false; });
  window.scrollTo({ top: menuScrollPosition, behavior: 'instant' });
  if (restoreFocus) menuButton.focus({ preventScroll: true });
}
menuButton.addEventListener('click', () => {
  if (!mobileNav.hidden) { closeMenu(); return; }
  menuScrollPosition = window.scrollY;
  document.body.style.top = `-${menuScrollPosition}px`;
  document.body.classList.add('menu-open');
  header.classList.add('menu-open');
  mobileNav.hidden = false;
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Закрити меню');
  pageContent.forEach(element => { element.inert = true; });
  mobileNav.querySelector('a').focus({ preventScroll: true });
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  closeMenu({ restoreFocus: false });
  const target = document.querySelector(link.getAttribute('href'));
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
}));
document.addEventListener('keydown', event => {
  if (mobileNav.hidden) return;
  if (event.key === 'Escape') { closeMenu(); return; }
  if (event.key !== 'Tab') return;
  const focusable = [menuButton, ...mobileNav.querySelectorAll('a')];
  const first = focusable[0], last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.addEventListener('click', event => { if (!mobileNav.hidden && !header.contains(event.target)) closeMenu(); });
mobileHero.addEventListener('change', () => { if (!mobileHero.matches) closeMenu({ restoreFocus: false }); });
if ('IntersectionObserver' in window) {
  const bookingVisible = new Set();
  const bookingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) bookingVisible.add(entry.target); else bookingVisible.delete(entry.target);
    });
    document.body.classList.toggle('booking-in-view', bookingVisible.size > 0);
  });
  [document.querySelector('#booking'), document.querySelector('footer')].forEach(element => bookingObserver.observe(element));
}

const reviews = [
  ['«Тут усе продумано до дрібниць: від атмосфери до результату. Манікюр носиться чудово, а після візиту просто гарний настрій.»', 'Олена К.'],
  ['«Дуже делікатний підхід до брів. Майстриня почула мої побажання, і результат виглядає саме так природно, як я хотіла.»', 'Марина С.'],
  ['«Вперше була на догляді за обличчям і вже планую наступний візит. Спокійно, комфортно й видно увагу до кожної деталі.»', 'Ірина М.'],
  ['«Укладка пережила цілий вечір, а збиратися тут було справжнім задоволенням. Дякую за красу і турботу!»', 'Дарина Л.']
];
let reviewIndex = 0;
function showReview(index) {
  reviewIndex = (index + reviews.length) % reviews.length;
  const card = document.querySelector('.review-card');
  card.querySelector('blockquote').textContent = reviews[reviewIndex][0];
  card.querySelector('.review-author strong').textContent = reviews[reviewIndex][1];
  card.querySelector('.review-count').textContent = `0${reviewIndex + 1} / 0${reviews.length}`;
}
document.querySelector('.review-prev').addEventListener('click', () => showReview(reviewIndex - 1));
document.querySelector('.review-next').addEventListener('click', () => showReview(reviewIndex + 1));

const bookingForm = document.querySelector('#booking-form');
const phoneInput = bookingForm.querySelector('#client-phone');
const nameInput = bookingForm.querySelector('#client-name');
const phoneError = document.querySelector('#phone-error');
const formStatus = bookingForm.querySelector('.form-status');
function validatePhone() {
  const digits = phoneInput.value.replace(/\D/g, '');
  const message = phoneInput.value && (digits.length < 10 || digits.length > 15) ? 'Введіть номер телефону: від 10 до 15 цифр.' : '';
  phoneInput.setCustomValidity(message);
  phoneError.textContent = message;
  phoneInput.setAttribute('aria-invalid', String(Boolean(message)));
}
phoneInput.addEventListener('input', validatePhone);
nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity(nameInput.value && !nameInput.value.trim() ? 'Вкажіть ваше ім’я.' : '');
  nameInput.removeAttribute('aria-invalid');
});
bookingForm.addEventListener('invalid', event => {
  event.target.setAttribute('aria-invalid', 'true');
  formStatus.classList.add('is-error');
  formStatus.textContent = 'Перевірте ім’я, номер телефону та оберіть послугу.';
}, true);
bookingForm.querySelector('select').addEventListener('change', event => event.target.removeAttribute('aria-invalid'));
bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  validatePhone();
  nameInput.setCustomValidity(nameInput.value.trim() ? '' : 'Вкажіть ваше ім’я.');
  if (!form.reportValidity()) return;
  formStatus.classList.remove('is-error');
  formStatus.textContent = 'Демо-запис готовий. Дякуємо! Ваші дані не збережено й не надіслано.';
  form.reset();
  form.querySelectorAll('[aria-invalid]').forEach(input => input.removeAttribute('aria-invalid'));
  phoneError.textContent = '';
});
bookingForm.querySelector('button[type="submit"]').disabled = false;
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top > innerHeight) el.classList.add('is-pending');
    else el.classList.add('visible');
    observer.observe(el);
  });
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

const imageReveal = document.querySelector('.image-reveal');
if (imageReveal) {
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    imageReveal.classList.add('is-pending');
    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        imageReveal.classList.add('visible');
        imageObserver.disconnect();
      }
    }, { threshold: .18 });
    imageObserver.observe(imageReveal);
  } else imageReveal.classList.add('visible');
}
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) document.querySelectorAll('.reveal,.image-reveal').forEach(element => element.classList.add('visible'));
});
