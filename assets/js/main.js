/* Shared behaviour: nav, petals, confetti, scroll reveals */

/* ---- Navigation (built once, highlights current page) ---- */
function buildNav(active){
  const pages = [
    ["index.html","Home"],
    ["gallery.html","Gallery"],
    ["puzzle.html","Puzzle"],
    ["jeopardy.html","Jeopardy"],
    ["poetry.html","Poetry"]
  ];
  const links = pages.map(([href,label])=>
    `<a href="${href}" class="${active===href?'active':''}">${label}</a>`).join("");
  const nav = document.createElement("nav");
  nav.className="nav";
  nav.innerHTML = `
    <a class="brand" href="index.html">Nabeeha<span class="dot">.</span></a>
    <button class="burger" aria-label="menu">☰</button>
    <div class="links">${links}</div>`;
  document.body.prepend(nav);
  const burger = nav.querySelector(".burger");
  const linksEl = nav.querySelector(".links");
  burger.addEventListener("click",()=>linksEl.classList.toggle("open"));
}

/* ---- Floating petals / hearts ---- */
function buildPetals(){
  const glyphs=["🌸","💛","❤","✨","🌷","💗"];
  const layer=document.createElement("div");
  layer.className="petals";
  for(let i=0;i<16;i++){
    const p=document.createElement("span");
    p.className="petal";
    p.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];
    p.style.left=Math.random()*100+"vw";
    p.style.fontSize=(14+Math.random()*18)+"px";
    p.style.animationDuration=(9+Math.random()*11)+"s";
    p.style.animationDelay=(-Math.random()*15)+"s";
    layer.appendChild(p);
  }
  document.body.appendChild(layer);
}

/* ---- Scroll reveal for .fade / .tile elements ---- */
function initReveal(){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll(".fade,.tile").forEach(el=>io.observe(el));
}

/* ---- Confetti ---- */
function confettiBurst(count){
  count = count||160;
  let c=document.getElementById("confetti");
  if(!c){c=document.createElement("canvas");c.id="confetti";document.body.appendChild(c);}
  const ctx=c.getContext("2d");
  c.width=innerWidth;c.height=innerHeight;
  const colors=["#c56074","#c9a24b","#5b1e34","#f4d9df","#e6cd8f","#7a2e46"];
  const parts=[];
  for(let i=0;i<count;i++){
    parts.push({
      x:Math.random()*c.width, y:-20-Math.random()*c.height*0.4,
      r:4+Math.random()*7, c:colors[Math.floor(Math.random()*colors.length)],
      vx:-2+Math.random()*4, vy:2+Math.random()*4, rot:Math.random()*6,
      vr:-.2+Math.random()*.4, shape:Math.random()<.5?0:1
    });
  }
  let frames=0;
  (function anim(){
    ctx.clearRect(0,0,c.width,c.height);
    parts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.04;p.rot+=p.vr;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.c;
      if(p.shape===0){ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.6);}
      else{ctx.beginPath();ctx.arc(0,0,p.r*.7,0,7);ctx.fill();}
      ctx.restore();
    });
    frames++;
    if(frames<260) requestAnimationFrame(anim);
    else ctx.clearRect(0,0,c.width,c.height);
  })();
}

/* ---- boot ---- */
document.addEventListener("DOMContentLoaded",()=>{
  const active = document.body.dataset.page || "index.html";
  buildNav(active);
  buildPetals();
  initReveal();
});
