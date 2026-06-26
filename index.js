
const hamburger=document.getElementById('hamburger');
const mobileNav=document.getElementById('mobileNav');
hamburger.addEventListener('click',()=>{
  mobileNav.classList.toggle('open');
  const s=hamburger.querySelectorAll('span');
  if(mobileNav.classList.contains('open')){s[0].style.transform='rotate(45deg) translate(5px,5px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translate(5px,-5px)'}
  else{s.forEach(x=>{x.style.transform='';x.style.opacity=''})}
});
function closeMobileNav(){
  mobileNav.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(x=>{x.style.transform='';x.style.opacity=''});
}
const fadeEls=document.querySelectorAll('.fade-in');
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
fadeEls.forEach(el=>obs.observe(el));
const nav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>{nav.style.boxShadow=window.scrollY>60?'0 4px 32px rgba(0,0,0,0.3)':'none'});
function handleFormSubmit(btn){btn.textContent='Received — We\'ll Call You Within 24 Hours';btn.style.background='linear-gradient(135deg,#1A3A2A,#2E5E3E)';btn.disabled=true}
window.addEventListener('resize',()=>{if(window.innerWidth>992)closeMobileNav()});
