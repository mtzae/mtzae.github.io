const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const productsToggle = document.querySelector('.products-toggle');
const productsNav = document.querySelector('.nav-products');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

productsToggle?.addEventListener('click', () => {
  const open = productsNav.classList.toggle('open');
  productsToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    productsNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the current page in the navigation.
const currentPage = document.body.dataset.page;
document.querySelectorAll('.main-nav [data-page]').forEach(link => {
  link.classList.toggle('active', link.dataset.page === currentPage);
});

// Back to top button on every page.
const backTop = document.querySelector('.back-to-top');
const toggleBackTop = () => {
  backTop?.classList.toggle('show', window.scrollY > 450);
};
window.addEventListener('scroll', toggleBackTop, {passive:true});
toggleBackTop();

backTop?.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* Quote popup */
(function(){
  const modal=document.getElementById('quoteModal');
  if(!modal) return;
  const form=document.getElementById('quoteForm');
  const success=document.getElementById('quoteSuccess');
  const wa=document.getElementById('quoteWhatsapp');
  function openQuote(e){ if(e) e.preventDefault(); modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('quote-open'); const first=modal.querySelector('input'); if(first) setTimeout(()=>first.focus(),80); }
  function closeQuote(){ modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('quote-open'); }
  document.addEventListener('click',function(e){
    const trigger=e.target.closest('[data-open-quote]');
    if(trigger) openQuote(e);
    if(e.target.closest('[data-close-quote]')) closeQuote();
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape' && modal.classList.contains('is-open')) closeQuote();});
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name')||'', company=data.get('company')||'', phone=data.get('phone')||'', email=data.get('email')||'', product=data.get('product')||'', message=data.get('message')||'';
    const text=`QUOTE REQUEST%0A%0AName: ${encodeURIComponent(name)}%0ACompany: ${encodeURIComponent(company)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AProduct / Requirement: ${encodeURIComponent(product)}%0AMessage: ${encodeURIComponent(message)}`;
    wa.href='https://wa.me/971522734321?text='+text;
    form.hidden=true; success.hidden=false;
  });
})();
