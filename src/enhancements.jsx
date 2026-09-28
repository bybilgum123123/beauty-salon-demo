import React, { Suspense, lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import SpotlightCard from './reactbits/SpotlightCard.jsx';
import GlareHover from './reactbits/GlareHover.jsx';
import '../enhancements.css';

const SoftAurora = lazy(() => import('./reactbits/SoftAurora.jsx'));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function AuroraMount() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (reducedMotion || matchMedia('(max-width: 760px)').matches || !window.WebGLRenderingContext) return;
    const target = document.querySelector('#aurora-root');
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: '80px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return active ? <Suspense fallback={null}><SoftAurora speed={0.18} scale={1.25} brightness={0.34} color1="#e8c7bb" color2="#efe4d0" noiseAmplitude={0.42} bandHeight={0.42} bandSpread={0.9} colorSpeed={0.35} enableMouseInteraction={false} lightMode /></Suspense> : null;
}

function HeroGlare() {
  return <GlareHover className="hero-glare" width="100%" height="100%" background="transparent" borderRadius="inherit" borderColor="transparent" glareColor="#fff5e8" glareOpacity={0.13} glareAngle={-35} glareSize={180} transitionDuration={1100}>
    <img src="assets/hero.webp" alt="Елегантний образ у світлому просторі салону Lumière" fetchPriority="high" />
  </GlareHover>;
}

const smallServices = [
  { index: '02 / face', icon: '✧', title: 'Брови та вії', description: 'Виразний погляд без зайвих зусиль: форма, колір і природний акцент.', price: 'від 450 ₴' },
  { index: '03 / skin', icon: '◌', title: 'Догляд за обличчям', description: 'Професійні процедури для сяйва, свіжості та відчуття відновлення.', price: 'від 1 100 ₴' },
  { index: '04 / style', icon: '≈', title: 'Волосся та макіяж', description: 'Легкі укладки і продуманий образ для важливого дня або просто для себе.', price: 'від 700 ₴' }
];

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.enhanced-service');
    if (reducedMotion) { cards.forEach(card => card.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return <>
    <article className="service-card service-feature enhanced-service">
      <img src="assets/manicure.webp" alt="Нюдовий манікюр, виконаний у салоні" loading="lazy" />
      <div className="service-overlay"><span className="service-index">01 / nails</span><div><h3>Манікюр і педикюр</h3><p>Догляд, форма і покриття, які пасують саме вам.</p><div className="service-bottom"><span>від 650 ₴</span><a href="#booking" aria-label="Записатися на манікюр або педикюр">↗</a></div></div></div>
    </article>
    {smallServices.map((service, index) => <SpotlightCard key={service.index} className="service-card service-small enhanced-service" spotlightColor="rgba(255, 246, 226, 0.38)" style={{ '--enter-delay': `${(index + 1) * 80}ms` }}>
      <span className="service-icon" aria-hidden="true">{service.icon}</span><span className="service-index">{service.index}</span><h3>{service.title}</h3><p>{service.description}</p><div className="service-bottom"><span>{service.price}</span><a href="#booking" aria-label={`Записатися: ${service.title}`}>↗</a></div>
    </SpotlightCard>)}
  </>;
}

const galleryItems = [
  { id: 'portrait', img: 'assets/hero.webp', alt: 'Елегантний образ клієнтки', label: 'Образи', height: 760 },
  { id: 'manicure', img: 'assets/manicure.webp', alt: 'Нюдовий манікюр', label: 'Манікюр', height: 630 },
  { id: 'interior', img: 'assets/interior.webp', alt: 'Світлий інтер’єр салону', label: 'Наш простір', height: 660 },
  { id: 'brows', img: 'assets/brows.webp', alt: 'Природний макіяж брів і вій', label: 'Брови та вії', height: 660 },
  { id: 'hair', img: 'assets/hair.webp', alt: 'Майстриня створює укладку', label: 'Волосся', height: 760 },
  { id: 'facial', img: 'assets/facial.webp', alt: 'Делікатний догляд за обличчям', label: 'Догляд', height: 630 }
];

function openGalleryItem(item) {
  const dialog = document.querySelector('.lightbox');
  const image = dialog.querySelector('img');
  image.src = item.img;
  image.alt = item.alt;
  dialog.querySelector('p').textContent = item.label;
  dialog.showModal();
}

const roots = [
  ['aurora-root', <AuroraMount />],
  ['hero-image-root', <HeroGlare />],
  ['services-react-root', <Services />]
];
for (const [id, component] of roots) {
  const element = document.getElementById(id);
  if (element) createRoot(element).render(component);
}

function mountNear(element, render) {
  if (!element) return;
  const observer = new IntersectionObserver(async entries => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    await render();
  }, { rootMargin: '400px 0px' });
  observer.observe(element);
}

const galleryRoot = document.getElementById('gallery-react-root');
mountNear(galleryRoot, async () => {
  const { default: Masonry } = await import('./reactbits/Masonry.jsx');
  galleryRoot.classList.add('is-enhanced');
  createRoot(galleryRoot).render(<Masonry items={galleryItems} onItemClick={openGalleryItem} animateFrom="near" stagger={0.08} duration={0.75} blurToFocus={false} scaleOnHover={false} colorShiftOnHover={false} />);
});

if (!reducedMotion) {
  for (const [id, text] of [['gallery-heading-root', 'Краса у деталях'], ['team-heading-root', 'Майстри вашої довіри']]) {
    const element = document.getElementById(id);
    mountNear(element, async () => {
      const { default: SplitText } = await import('./reactbits/SplitText.jsx');
      createRoot(element).render(<SplitText text={text} tag="span" splitType="words" delay={85} duration={0.85} ease="power2.out" from={{ opacity: 1, y: 10 }} to={{ opacity: 1, y: 0 }} threshold={0.14} rootMargin="-40px" textAlign="left" />);
    });
  }
}
