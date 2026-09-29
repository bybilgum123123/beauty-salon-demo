import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import SpotlightCard from './reactbits/SpotlightCard.jsx';
import '../enhancements.css';

const services = [
  { index: '01 / Нігті', title: 'Манікюр і педикюр', description: 'Догляд, форма і покриття, які пасують саме вам.', price: '650', image: 'assets/manicure.webp', alt: 'Нюдовий манікюр у світлому салоні', booking: 'Записатися на манікюр або педикюр' },
  { index: '02 / Погляд', title: 'Брови та вії', description: 'Форма, колір і природний акцент для виразного погляду.', price: '450', image: 'assets/brows.webp', alt: 'Природний акцент на бровах і віях', booking: 'Записатися на брови та вії' },
  { index: '03 / Обличчя', title: 'Догляд за обличчям', description: 'Делікатні процедури для свіжості, сяйва й відновлення.', price: '1 100', image: 'assets/facial.webp', alt: 'Делікатна процедура догляду за обличчям', booking: 'Записатися на догляд за обличчям' },
  { index: '04 / Образ', title: 'Волосся та макіяж', description: 'Легкі укладки і продуманий образ для вашого дня.', price: '700', image: 'assets/hair.webp', alt: 'Майстриня створює м’яку укладку волосся', booking: 'Записатися на укладку або макіяж' }
];

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.enhanced-service');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      cards.forEach(card => card.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return services.map((service, index) => (
    <SpotlightCard as="article" key={service.index} className="service-card enhanced-service" spotlightColor="rgba(255,248,241,0.18)" style={{ '--enter-delay': `${index * 55}ms` }}>
      <div className="service-media"><img src={service.image} alt={service.alt} loading="lazy" width="1536" height="1024" /></div>
      <div className="service-content">
        <span className="service-index">{service.index}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-bottom">
          <span className="service-price">від <strong>{service.price}</strong> <small>₴</small></span>
          <a href="#booking" aria-label={service.booking}>Записатися</a>
        </div>
      </div>
    </SpotlightCard>
  ));
}

const root = document.getElementById('services-react-root');
if (root) createRoot(root).render(<Services />);