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
function setCategory(category, focus = false) {
  const data = priceData[category];
  const index = Object.keys(priceData).indexOf(category);
  tabs.forEach(tab => {
    const active = tab.dataset.category === category;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
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
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setCategory(tabs[next].dataset.category, true);
  });
});
setCategory('nails');

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const heroStage = document.querySelector('#hero-stage');
const heroPortrait = document.querySelector('#hero-image-root');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileHero = window.matchMedia('(max-width: 760px)');
let heroTick = 0;
function updateHeroTurn() {
  heroTick = 0;
  if (reducedMotion.matches || mobileHero.matches) {
    heroPortrait.style.setProperty('--hero-turn', '1');
    return;
  }
  const range = Math.max(1, heroStage.offsetHeight - heroStage.querySelector('.hero').offsetHeight);
  const progress = Math.min(1, Math.max(0, -heroStage.getBoundingClientRect().top / range));
  const eased = progress * progress * (3 - 2 * progress);
  heroPortrait.style.setProperty('--hero-turn', eased.toFixed(4));
}
function requestHeroTurn() {
  if (!heroTick) heroTick = requestAnimationFrame(updateHeroTurn);
}
window.addEventListener('scroll', requestHeroTurn, { passive: true });
window.addEventListener('resize', requestHeroTurn, { passive: true });
reducedMotion.addEventListener('change', requestHeroTurn);
mobileHero.addEventListener('change', requestHeroTurn);
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => heroStage.classList.toggle('is-active', entry.isIntersecting), { rootMargin: '80px' }).observe(heroStage);
} else heroStage.classList.add('is-active');
updateHeroTurn();

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Відкрити меню'); }
menuButton.addEventListener('click', () => {
  mobileNav.hidden = !mobileNav.hidden;
  const open = !mobileNav.hidden;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

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

document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  form.querySelector('.form-status').textContent = 'Дякуємо! Це демонстраційна форма — дані не були надіслані.';
  form.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

const imageReveal = document.querySelector('.image-reveal');
if (imageReveal) {
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        imageReveal.classList.add('visible');
        imageObserver.disconnect();
      }
    }, { threshold: .18 });
    imageObserver.observe(imageReveal);
  } else imageReveal.classList.add('visible');
}
