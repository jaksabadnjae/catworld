// =====================
// DROPDOWN
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropbtn');
  dropdowns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn.nextElementSibling;
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  });

  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  });
});

// =====================
// SLIDESHOW
// =====================
let slideIndex = 0;

function showSlides(container) {
  const slides = container.querySelectorAll(".mySlides");
  if(slides.length === 0) return;
  slides.forEach(s => s.style.display="none");
  slideIndex++;
  if(slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display="block";
}

document.querySelectorAll('.slideshow-container').forEach(container => {
  showSlides(container);
  setInterval(()=> showSlides(container), 4000);

  const prev = container.querySelector('.prev');
  const next = container.querySelector('.next');

  if(prev) prev.addEventListener('click', ()=>{
    slideIndex -= 2;
    showSlides(container);
  });

  if(next) next.addEventListener('click', ()=>{
    showSlides(container);
  });
});

// =====================
// FADE-IN
// =====================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// =====================
// RANDOM FACT BUTTON
// =====================
const facts = [
  "Mačke mogu da prepoznaju glas svog vlasnika, ali često ignorišu naredbe.",
  "Prosečna mačka spava 12-16 sati dnevno.",
  "Mačke imaju osetljive brkove koji im pomažu da procene prostor oko sebe.",
  "Najstarija mačka živela je preko 38 godina.",
  "Mačke mogu praviti preko 100 različitih zvukova, dok psi samo oko 10.",
  "Mačke su u drevnom Egiptu smatrane svetim životinjama.",
  "Mačke mogu trčati i do 48 km/h kada su u lovu ili igri.",
  "Mačke koriste rep za ravnotežu i komunikaciju raspoloženja."
];

const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('random-fact');

factBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});
