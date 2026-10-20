/* Unfold the title, move it into the hero, then reveal the website behind it. */
(function(){
  'use strict';
  const root=document.documentElement;
  const overlay=document.querySelector('#brand-intro');
  const logo=document.querySelector('.intro-brand');
  const heroLogo=document.querySelector('.chrome-wordmark');
  const spark=document.querySelector('.intro-spark');
  const rail=document.querySelector('.intro-rail');
  const curtain=document.querySelector('.intro-curtain');
  const words=['diamond','fountain','works'].map(name=>document.querySelector('[data-word="'+name+'"]'));
  const background=[document.querySelector('.header'),document.querySelector('main'),document.querySelector('footer'),document.querySelector('.skip')].filter(Boolean);
  const ease='cubic-bezier(.22,.75,.18,1)';
  let running=false,animations=[],landing=null,deadline=null;
  function finish(){
    running=false;clearTimeout(deadline);clearTimeout(window.__dfwIntroFallback);
    window.removeEventListener('resize',alignLogo);
    animations.forEach(a=>{try{a.cancel()}catch(e){}});animations=[];
    root.classList.remove('intro-pending','intro-playing','intro-revealing');root.classList.add('intro-complete');
    overlay.hidden=true;
    background.forEach(el=>{if(el.hasAttribute('data-intro-inert')){el.inert=false;el.removeAttribute('data-intro-inert')}});
    // Preserve incoming project/about links after the mandatory opening.
    let target=document.querySelector('.primary-link');
    if(location.hash){try{const section=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(section){section.scrollIntoView({behavior:'instant'});target=section;}}catch(e){}}
    if(document.activeElement===overlay)target?.focus({preventScroll:true});
  }
  function animate(el,frames,start,length,easing=ease){
    const a=el.animate(frames,{duration:length,delay:start,easing,fill:'forwards'});
    a.finished.catch(()=>{});animations.push(a);return a;
  }
  function alignLogo(){
    const target=heroLogo.getBoundingClientRect();
    const from={left:(window.innerWidth-target.width)/2+'px',top:(window.innerHeight-target.height)/2+'px'};
    const to={left:target.left+'px',top:target.top+'px'};
    // Use the actual hero size from the start: only the position changes.
    Object.assign(logo.style,{width:target.width+'px',height:target.height+'px'},from);
    if(landing)landing.effect.setKeyframes([from,to]);
    return [from,to];
  }
  try{
    if(!logo?.animate||!heroLogo||!spark||!rail||words.some(word=>!word)){finish();return;}
    clearTimeout(window.__dfwIntroFallback);
    window.scrollTo({top:0,behavior:'instant'});
    overlay.hidden=false;root.classList.add('intro-playing');running=true;
    background.forEach(el=>{if(!el.inert){el.inert=true;el.setAttribute('data-intro-inert','')}});
    overlay.focus({preventScroll:true});
    // An error recovery deadline prevents a broken browser API trapping visitors.
    deadline=setTimeout(finish,7500);
    const positions=alignLogo();
    window.addEventListener('resize',alignLogo,{passive:true});
      const stretch=Math.min(5,window.innerWidth*.78/spark.getBoundingClientRect().width);
      animate(spark,[{opacity:0,transform:'scale(.5)',offset:0},{opacity:1,transform:'scale(1)',offset:.6},{opacity:.75,transform:'scale(.96)',offset:1}],0,800);
      animate(spark,[{opacity:.75,transform:'translateY(0) scaleX(1) scaleY(1)'},{opacity:0,transform:'translateY(-20px) scaleX('+stretch+') scaleY(.025)'}],800,600);
      animate(rail,[{opacity:0,transform:'scaleX(.05)'},{opacity:.85,transform:'scaleX(1)',offset:.55},{opacity:0,transform:'scaleX(1.05)'}],800,750);
      // First word enters in the middle, then makes room for the next line.
      animate(words[0],[{opacity:0,transform:'translateY(175px)',clipPath:'inset(100% -20% 0 -20%)'},{opacity:1,transform:'translateY(118px)',clipPath:'inset(0% -20% 0 -20%)'}],950,650);
      animate(words[0],[{transform:'translateY(118px)',opacity:1},{transform:'translateY(56px)',opacity:1}],1650,650);
      animate(words[1],[{opacity:0,transform:'translateY(135px)',clipPath:'inset(100% -20% 0 -20%)'},{opacity:1,transform:'translateY(56px)',clipPath:'inset(0% -20% 0 -20%)'}],1650,650);
      animate(words[0],[{transform:'translateY(56px)',opacity:1},{transform:'translateY(0px)',opacity:1}],2450,650);
      animate(words[1],[{transform:'translateY(56px)',opacity:1},{transform:'translateY(0px)',opacity:1}],2450,650);
      animate(words[2],[{opacity:0,transform:'translateY(110px)',clipPath:'inset(100% -20% 0 -20%)'},{opacity:1,transform:'translateY(0px)',clipPath:'inset(0% -20% 0 -20%)'}],2450,750);
    // All word reveals finish at 3200 ms. Move the complete title only after that.
    landing=animate(logo,positions,3500,850);
    landing.finished.then(()=>{
      if(!running)return;
      try{
        root.classList.add('intro-revealing');
        animate(curtain,[{opacity:1},{opacity:0}],0,500);
        // The overlay title stays visible at its destination during the reveal.
        const clock=animate(overlay,[{opacity:1},{opacity:1}],0,500,'linear');
        clock.finished.then(finish).catch(()=>{});
      }catch(error){finish();}
    }).catch(()=>{});
  }catch(error){finish();}
})();
