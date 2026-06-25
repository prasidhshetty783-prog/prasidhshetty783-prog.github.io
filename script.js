/* ============================================================
   PRASIDH SHETTY — PORTFOLIO
   Awwwards-grade interactions: preloader, smooth scroll, word
   reveals, parallax, tilt, magnetic, cursor, ambient, ⚽
   ============================================================ */

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- Theme (dark / light) ---------- */
const root = document.documentElement;
if (localStorage.getItem("theme") === "light") {
  root.setAttribute("data-theme", "light");
}
const themeToggles = document.querySelectorAll(".theme-toggle");
const syncThemeIcon = () => {
  const light = root.getAttribute("data-theme") === "light";
  themeToggles.forEach((b) => (b.textContent = light ? "☾" : "☀"));
};
syncThemeIcon();
themeToggles.forEach((btn) =>
  btn.addEventListener("click", () => {
    const light = root.getAttribute("data-theme") === "light";
    if (light) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    syncThemeIcon();
  })
);

/* ---------- Nav scroll state ---------- */
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const burger = document.querySelector(".nav-burger");
const links = document.querySelector(".nav-links");
if (burger) {
  burger.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

/* ---------- Year ---------- */
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

/* ---------- Scroll progress bar ---------- */
const progress = document.createElement("div");
progress.className = "scroll-progress";
document.body.appendChild(progress);

/* ---------- Preloader (counter + curtain) ---------- */
const seenPre = sessionStorage.getItem("seenPre");
const pre = document.createElement("div");
pre.className = "preloader" + (seenPre ? " quick" : "");
pre.innerHTML = `
  <div class="pre-name">PRASIDH<span>.</span></div>
  <div class="pre-tag">UX & UI Designer</div>
  <div class="pre-count">000</div>`;
document.body.prepend(pre);

let revealsStarted = false;
function finishPreloader() {
  pre.classList.add("done");
  sessionStorage.setItem("seenPre", "1");
  startReveals();
  setTimeout(() => pre.remove(), 1000);
}
function runPreloader() {
  if (prefersReduced) {
    pre.remove();
    startReveals();
    return;
  }
  if (seenPre) {
    setTimeout(finishPreloader, 300);
    return;
  }
  const counter = pre.querySelector(".pre-count");
  const t0 = performance.now();
  const DUR = 1500;
  (function tick(now) {
    const p = Math.min(1, (now - t0) / DUR);
    const eased = 1 - Math.pow(1 - p, 3);
    counter.textContent = String(Math.round(eased * 100)).padStart(3, "0");
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(finishPreloader, 180);
  })(performance.now());
}

/* ---------- Ambient floating elements ---------- */
if (!prefersReduced) {
  const ambient = document.createElement("div");
  ambient.className = "ambient";
  ambient.setAttribute("aria-hidden", "true");
  ambient.innerHTML = `
    <span class="orb o1" data-pfactor="0.06"></span>
    <span class="orb o2" data-pfactor="-0.04"></span>
    <span class="orb o3" data-pfactor="0.09"></span>
    <span class="spark s1" data-pfactor="-0.08">✦</span>
    <span class="spark s2" data-pfactor="0.12">✦</span>
    <span class="spark s3" data-pfactor="-0.05">✦</span>
    <span class="spark s4" data-pfactor="0.07">✦</span>
    <span class="ring-deco r1" data-pfactor="0.05"></span>
    <span class="ring-deco r2" data-pfactor="-0.07"></span>`;
  document.body.appendChild(ambient);
}

/* ---------- Word-split reveal (typography motion) ---------- */
function splitWords(el) {
  let idx = 0;
  const frag = document.createDocumentFragment();
  [...el.childNodes].forEach((node) => {
    if (node.nodeType === 3) {
      node.textContent.split(/(\s+)/).forEach((tok) => {
        if (!tok) return;
        if (/^\s+$/.test(tok)) {
          frag.appendChild(document.createTextNode(" "));
          return;
        }
        const w = document.createElement("span");
        w.className = "w";
        const i = document.createElement("span");
        i.className = "wi";
        i.textContent = tok;
        i.style.transitionDelay = Math.min(idx++ * 50, 850) + "ms";
        w.appendChild(i);
        frag.appendChild(w);
      });
    } else if (node.nodeName === "BR") {
      frag.appendChild(node.cloneNode());
    } else {
      const w = document.createElement("span");
      w.className = "w";
      const i = document.createElement("span");
      i.className = "wi";
      i.style.transitionDelay = Math.min(idx++ * 50, 850) + "ms";
      i.appendChild(node.cloneNode(true));
      w.appendChild(i);
      frag.appendChild(w);
    }
  });
  el.innerHTML = "";
  el.appendChild(frag);
  el.classList.add("split");
}
if (!prefersReduced) {
  document
    .querySelectorAll(".section-title, .cs-hero h1, .page-hero h1, .footer-cta h2, .statement")
    .forEach(splitWords);
}

/* ---------- Reveal observer (started after preloader) ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
function startReveals() {
  if (revealsStarted) return;
  revealsStarted = true;
  document.querySelectorAll(".reveal, .split").forEach((el) => io.observe(el));
}

/* ---------- Parallax engine ---------- */
const parallaxItems = [];
document.querySelectorAll("[data-pfactor]").forEach((el) => {
  parallaxItems.push({ el, factor: parseFloat(el.dataset.pfactor), mode: "scroll" });
});
if (!prefersReduced) {
  document.querySelectorAll(".hero-portrait img, .cs-cover img").forEach((img) => {
    img.classList.add("parallax-img");
    parallaxItems.push({ el: img, factor: 0.1, mode: "viewport" });
  });
}
let ticking = false;
function updateParallax() {
  const vh = window.innerHeight;
  const sy = window.scrollY;
  progress.style.width =
    (sy / (document.documentElement.scrollHeight - vh)) * 100 + "%";

  if (!prefersReduced) {
    parallaxItems.forEach((item) => {
      if (item.mode === "scroll") {
        item.el.style.setProperty("--py", sy * item.factor + "px");
      } else {
        const rect = item.el.parentElement.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - vh / 2) * item.factor;
        item.el.style.transform = `scale(1.12) translateY(${offset.toFixed(1)}px)`;
      }
    });
  }
  ticking = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateParallax);
    }
  },
  { passive: true }
);
updateParallax();

/* ---------- 3D tilt (cards + portrait + photography) ---------- */
if (finePointer && !prefersReduced) {
  document
    .querySelectorAll(".project-media, .feature-card, .hero-portrait .frame, .photo-grid .ph")
    .forEach((card) => {
      card.classList.add("tiltable");
      let raf = null;
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 7).toFixed(2)}deg) translateY(-4px)`;
          card.style.setProperty("--mx", (x + 0.5) * 100 + "%");
          card.style.setProperty("--my", (y + 0.5) * 100 + "%");
        });
      });
      card.addEventListener("mouseleave", () => {
        if (raf) cancelAnimationFrame(raf);
        card.style.transform = "";
      });
    });
}

/* ---------- Magnetic buttons ---------- */
if (finePointer && !prefersReduced) {
  document.querySelectorAll(".btn, .theme-toggle, .project-link .arrow").forEach((btn) => {
    btn.classList.add("magnetic");
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ---------- Custom cursor ---------- */
if (finePointer && !prefersReduced) {
  document.documentElement.classList.add("has-custom-cursor");
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let mx = innerWidth / 2, my = innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    },
    { passive: true }
  );

  (function follow() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();

  const hoverTargets = "a, button, .project-media, .feature-card, .chip, .ph";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.add("is-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.remove("is-hover");
  });
  document.addEventListener("mousedown", () => ring.classList.add("is-down"));
  document.addEventListener("mouseup", () => ring.classList.remove("is-down"));
  document.addEventListener("mouseleave", () => {
    dot.style.opacity = 0;
    ring.style.opacity = 0;
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = 1;
    ring.style.opacity = 1;
  });
}

/* ---------- F1 marquee: accelerates on hover ---------- */
const marquee = document.querySelector(".marquee");
if (marquee && !prefersReduced) {
  const wrap = marquee.parentElement;
  const setRate = (r) =>
    marquee.getAnimations().forEach((a) => a.updatePlaybackRate(r));
  wrap.addEventListener("mouseenter", () => setRate(4.5));
  wrap.addEventListener("mouseleave", () => setRate(1));
}

/* ---------- Go ---------- */
runPreloader();
