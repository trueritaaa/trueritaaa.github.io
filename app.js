import * as THREE from 'three';

/* =====================================================================
   НАСТРОЙКИ ВЛАДЕЛЬЦА
   ===================================================================== */
// Куда ведёт кнопка «Заказать» и ссылка «Написать» в разделе «Обо мне».
// Можно заменить на личный Telegram, например 'https://t.me/username'.
const CONTACT_URL = 'https://t.me/margarita_1003';
const INSTAGRAM_URL = 'https://ig.me/m/trueritaaa';
const CHANNEL_URL = 'https://t.me/trueritaaa';

/* =====================================================================
   WORKS — ВСЕ РАБОТЫ САЙТА. Меняйте/добавляйте/удаляйте элементы здесь.
   Галерея-сфера и сетка «Работы» подстраиваются под длину массива.
   type: 'video' (нужны NN.mp4 + постер NN.jpg) или 'image' (только NN.jpg)
   ===================================================================== */
const WORKS = [
  { id: 17, aspect: 4/5, type: 'image', file: 'works/17.jpg', poster: 'works/17.jpg', title: 'Лукбук. Образ 1', category: 'Fashion', year: 2026, desc: 'Фэшн-лукбук: одна модель в разных образах.' },
  { id: 18, aspect: 4/5, type: 'image', file: 'works/18.jpg', poster: 'works/18.jpg', title: 'Лукбук. Образ 2', category: 'Fashion', year: 2026, desc: 'Детали образа: ткань, перчатки и свет как на студийной съёмке.' },
  { id: 19, aspect: 4/5, type: 'image', file: 'works/19.jpg', poster: 'works/19.jpg', title: 'Лукбук. Образ 3', category: 'Fashion', year: 2026, desc: 'Третий образ лукбука в той же студии и с той же моделью.' },
  { id: 23, aspect: 672/900, type: 'image', file: 'works/23.jpg', poster: 'works/23.jpg', title: 'Лукбук. Образ 4', category: 'Fashion', year: 2026, desc: 'Корсет, юбка-облако и красные перья. Та же модель, другой образ.' },
  { id: 24, aspect: 672/900, type: 'image', file: 'works/24.jpg', poster: 'works/24.jpg', title: 'Лукбук. Образ 4, в три четверти', category: 'Fashion', year: 2026, desc: 'Тот же образ с другого ракурса: лицо и платье не меняются.' },
  { id: 25, aspect: 672/900, type: 'image', file: 'works/25.jpg', poster: 'works/25.jpg', title: 'Лукбук. Образ 4 в полный рост', category: 'Fashion', year: 2026, desc: 'Полный рост у бархатной шторы, с сапогами и сеткой.' },
  { id: 26, aspect: 672/900, type: 'image', file: 'works/26.jpg', poster: 'works/26.jpg', title: 'Лукбук. Образ 4, спина', category: 'Fashion', year: 2026, desc: 'Вид со спины: шнуровка корсета и перья на руках.' },
  { id: 13, aspect: 9/16, type: 'video', file: 'works/13.mp4', poster: 'works/13.jpg', title: 'Мия у зеркала', category: 'Fashion / beauty', year: 2026, desc: 'Beauty-сцена у зеркала: кожа, свет и кружево.' },
  { id: 21, aspect: 4/5, type: 'image', file: 'works/21.jpg', poster: 'works/21.jpg', title: 'Мия. Улица', category: 'ИИ-персонаж', year: 2026, desc: 'Мия с зонтом на улице. Та же девушка, что и у зеркала.' },
  { id: 22, aspect: 4/5, type: 'image', file: 'works/22.jpg', poster: 'works/22.jpg', title: 'Мия. Портрет', category: 'ИИ-персонаж', year: 2026, desc: 'Крупный портрет Мии в очках и галстуке.' },
  { id: 20, aspect: 448/800, type: 'image', file: 'works/20.jpg', poster: 'works/20.jpg', title: 'Героиня рекламы Sela', category: 'Концепт рекламы', year: 2026, desc: 'Героиня для рекламного концепта бренда одежды. Концепт, заказа не было.' },
  { id: 1, aspect: 9/16,  type: 'video', file: 'works/01.mp4', poster: 'works/01.jpg', title: 'Рита. Первый снег', category: 'ИИ-героиня', year: 2026, desc: 'Серия про Риту: за окном первый снег, сюжет на 25 секунд.' },
  { id: 3, aspect: 9/16,  type: 'video', file: 'works/03.mp4', poster: 'works/03.jpg', title: 'Рита в образе', category: 'ИИ-героиня', year: 2026, desc: 'Праздничный образ Риты: красные сапоги, кокошник и бархатный диван.' },
  { id: 4, aspect: 9/16,  type: 'video', file: 'works/04.mp4', poster: 'works/04.jpg', title: 'Рита с семьёй', category: 'ИИ-героиня', year: 2026, desc: 'Рита с детьми на том же диване. Лицо не «плывёт» от кадра к кадру.' },
  { id: 5, aspect: 9/16,  type: 'video', file: 'works/05.mp4', poster: 'works/05.jpg', title: 'Рита. Прогулка', category: 'ИИ-героиня', year: 2026, desc: 'Рита идёт по квартире: живое движение, лицо не меняется.' },
  { id: 6, aspect: 9/16,  type: 'video', file: 'works/06.mp4', poster: 'works/06.jpg', title: 'Собирайся со мной', category: 'UGC-ролик', year: 2026, desc: 'Ролик в формате «собирайся со мной»: героиня говорит в камеру.' },
  { id: 7, aspect: 9/16,  type: 'video', file: 'works/07.mp4', poster: 'works/07.jpg', title: 'Лиза говорит', category: 'Говорящий персонаж', year: 2026, desc: 'ИИ-героиня говорит на русском: губы попадают в слова.' },
  { id: 8, aspect: 9/16,  type: 'video', file: 'works/08.mp4', poster: 'works/08.jpg', title: 'Внучка императора', category: 'Сюжетный ролик', year: 2026, desc: 'Историческая сцена: героиня находит старую фотографию.' },
  { id: 10, aspect: 9/16, type: 'video', file: 'works/10.mp4', poster: 'works/10.jpg', title: 'Бабуля-химичка', category: 'Сюжетный ролик', year: 2026, desc: 'Комедийный персонаж: одна и та же бабуля в каждой сцене.' },
  { id: 11, aspect: 16/9, type: 'video', file: 'works/11.mp4', poster: 'works/11.jpg', title: 'Вера. Лист персонажа', category: 'Персонаж', year: 2026, desc: 'Видео-лист персонажа: героиня в разных ракурсах до съёмки сцен.' },
  { id: 12, aspect: 640/274, type: 'video', file: 'works/12.mp4', poster: 'works/12.jpg', title: 'Трикс и фея Аннет', category: 'ИИ-фильм', year: 2025, desc: 'Мультфильм на 40 секунд, от сценария до монтажа.' },
  { id: 2, aspect: 9/16,  type: 'video', file: 'works/02.mp4', poster: 'works/02.jpg', title: 'Рита. Неизвестный номер', category: 'ИИ-героиня', year: 2026, desc: 'Новогодняя история: Рите пишет незнакомец. Первый выпуск сериала.' },
];

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const DEG = Math.PI / 180;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const wait = s => new Promise(r => gsap.delayedCall(s, r));
const dprOf = () => Math.min(window.devicePixelRatio || 1, 2);
const kindOf = it => it.type === 'video' ? 'ИИ-видео' : 'ИИ-фото';

document.getElementById('order').href = CONTACT_URL;
if (isTouch) document.getElementById('g-hint').textContent = 'ПРОВЕДИТЕ ПАЛЬЦЕМ';

async function loadFonts() {
  const sample = 'Абвгд Ёё abc 123';
  const specs = ['400 16px Geist', '500 16px Geist', '600 64px Geist', '300 22px Literata', '400 18px Literata',
    'italic 300 40px Literata', 'italic 400 17px Literata'];
  await Promise.race([
    Promise.all(specs.map(s => document.fonts.load(s, sample))).then(() => document.fonts.ready),
    wait(4)]);
}

function textCanvas(w, h, dpr) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.ceil(w * dpr)); c.height = Math.max(1, Math.ceil(h * dpr));
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.scale(dpr, dpr);
  return { c, ctx };
}
function canvasTex(c) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.generateMipmaps = false;
  t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter;
  return t;
}
function loadImage(src) {
  return new Promise(res => { const i = new Image(); i.crossOrigin = 'anonymous'; i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
}
function imgTex(img) {
  const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; return t;
}
function makeVideo(item, preload = 'metadata') {
  const v = document.createElement('video');
  v.crossOrigin = 'anonymous'; v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
  v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', ''); v.preload = preload; v.src = item.file;
  return v;
}
function safePlay(v) { try { const p = v.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {} }

/* ===================================================================
   ДОК И МАРШРУТИЗАЦИЯ
   =================================================================== */
const dock = $('#dock');
let dockShown = false;
function showDock() {
  if (dockShown) return; dockShown = true;
  gsap.fromTo(dock, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'expo.out', onStart: () => dock.style.pointerEvents = 'auto' });
  dock.style.pointerEvents = 'auto';
}
const menu = $('#menu'), menuBtn = $('#menu-btn');
menuBtn.addEventListener('click', e => { e.stopPropagation(); const o = menu.classList.toggle('open'); menuBtn.classList.toggle('open', o); menuBtn.setAttribute('aria-expanded', o); });
document.addEventListener('click', e => { if (!menu.contains(e.target)) { menu.classList.remove('open'); menuBtn.classList.remove('open'); } });
menu.querySelectorAll('a.row').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); menuBtn.classList.remove('open'); }));

const views = {};
let current = null, navId = 0;
async function go(name) {
  if (!views[name]) name = 'gallery';
  if (name === current) return;
  const id = ++navId;
  const prev = current ? views[current] : null;
  current = name;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === name));
  if (prev) {
    await new Promise(r => gsap.to(prev.el, { opacity: 0, duration: .35, ease: 'power2.in', onComplete: r }));
    prev.leave(); prev.el.style.visibility = 'hidden';
  }
  if (id !== navId) return;
  const next = views[name];
  try { await next.build(); } catch (e) { console.error(e); }
  if (id !== navId) return;
  next.el.style.visibility = 'visible';
  gsap.to(next.el, { opacity: 1, duration: .5, ease: 'power2.out' });
  if (name !== 'gallery') showDock();
  next.enter();
}
function route() { go((location.hash || '#gallery').slice(1)); }
window.addEventListener('hashchange', route);

/* ===================================================================
   ВИД 1 — ГАЛЕРЕЯ (сфера)
   =================================================================== */
function createGallery() {
  const el = $('#gallery'), mount = $('#g-canvas');
  let built = false, running = false, raf = 0;
  const items = WORKS, N = items.length;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isTouch });
  renderer.setPixelRatio(dprOf()); renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, .1, 100); camera.position.z = 12;
  const group = new THREE.Group(); scene.add(group);
  const geo = new THREE.PlaneGeometry(1, 1);
  const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
  let W = 1, H = 1, pxk = .01;
  const L = {};
  const px = v => v * pxk;
  const cursorEl = $('#g-cur');
  const ovEl = $('#g-ov');

  const planes = items.map((item, i) => {
    const mat = new THREE.MeshBasicMaterial({ color: 0x1b1b1d, transparent: true, side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat); mesh.visible = false; group.add(mesh);
    const p = { i, item, mesh, mat, aspect: 9 / 16, video: null, ptex: null, vtex: null, ready: false, mode: 'hidden',
      ci: i, circleSize: 0, collapse: 0, ex: 0, opacity: 0, sphere: new THREE.Vector3(), from: new THREE.Vector3(), playing: false };
    mesh.userData.p = p; return p;
  });
  const circleN = Math.min(10, N);

  function layout() {
    W = mount.clientWidth || innerWidth; H = mount.clientHeight || innerHeight;
    renderer.setSize(W, H); camera.aspect = W / H; camera.updateProjectionMatrix();
    pxk = (2 * 12 * Math.tan(30 * DEG)) / H;
    const mid = W >= 1025 && W <= 1440, phone = W <= 640;
    L.planeSize = 104 * (mid ? .8 : 1) * (phone ? 72 / 104 : 1);
    L.rx = 250 * (mid ? .8 : 1);
    if (phone) L.rx = W / 2 - 24 - L.planeSize / 2;
    L.ry = phone ? Math.min(L.rx * 1.4, H / 2 - 120) : L.rx; L.rz = L.rx;
    L.center = L.planeSize * 120 / 82;
    L.circleR = 240 * (phone ? .75 : 1);
    L.circleSize = phone ? 52 : 70;
    L.phone = phone;
    planes.forEach(p => {
      const i = p.i, y = i * (2 / N) - 1 + (1 / N), r = Math.sqrt(1 - y * y), a = Math.PI * (3 - Math.sqrt(5)) * i;
      p.sphere.set(Math.cos(a) * r * L.rx, y * L.ry, Math.sin(a) * r * L.rz).multiplyScalar(pxk);
    });
  }

  /* ---- медиа ---- */
  function setAspect(p, w, h) { if (w && h) p.aspect = w / h; }
  async function loadMedia(p) {
    const img = await loadImage(p.item.poster);
    if (img) { setAspect(p, img.naturalWidth, img.naturalHeight); p.ptex = imgTex(img); p.mat.map = p.ptex; p.mat.color.set(0xffffff); p.mat.needsUpdate = true; }
    p.ready = true;
  }
  function startVideo(p) {
    if (p.item.type !== 'video' || p.video) return;
    const v = p.video = makeVideo(p.item);
    v.addEventListener('loadedmetadata', () => setAspect(p, v.videoWidth, v.videoHeight));
    v.addEventListener('loadeddata', () => {
      setAspect(p, v.videoWidth, v.videoHeight);
      p.vtex = new THREE.VideoTexture(v); p.vtex.colorSpace = THREE.SRGBColorSpace;
      p.mat.map = p.vtex; p.mat.color.set(0xffffff); p.mat.needsUpdate = true; p.ready = true;
    });
    safePlay(v); p.playing = true;
  }
  function setPlaying(p, on) {
    if (!p.video || p.playing === on) return;
    p.playing = on; on ? safePlay(p.video) : p.video.pause();
  }

  /* ---- состояние ---- */
  const Z = { z: 0, o: 0 };
  let zi = -1, zoomOn = false, ovOpen = false;
  let yawT = 0, pitchT = 0, velX = 0, velY = 0, yawS = 0, pitchS = 0, prevYaw = 0, prevPitch = 0;
  let interacted = false, sphereReady = false, circleRot = 0, spinMul = 1, circleActive = false, introDone = false, introStarted = false;
  const qTmp = new THREE.Quaternion(), invQ = new THREE.Quaternion();
  const AX_Y = new THREE.Vector3(0, 1, 0), AX_X = new THREE.Vector3(1, 0, 0);
  const AUTO_AX = new THREE.Vector3(Math.sin(23 * DEG), Math.cos(23 * DEG), 0).normalize();
  const ptr = { x: 0, y: 0, dx: 0, dy: 0, down: false, path: 0, moved: false, pending: false, inside: false };
  let hovered = null;

  const tA = new THREE.Vector3(), tB = new THREE.Vector3(), tC = new THREE.Vector3();
  function whOf(p, size) { return p.aspect >= 1 ? [size, size / p.aspect] : [size * p.aspect, size]; }
  function updatePlane(p) {
    const m = p.mesh;
    if (p.mode === 'hidden') { m.visible = false; return; }
    let size, op = p.opacity; const pos = tA;
    let w, h;
    if (p.mode === 'circle') {
      const a = (-90 + p.ci * 36) * DEG + circleRot;
      tB.set(Math.cos(a) * px(L.circleR), -Math.sin(a) * px(L.circleR), 0);
      tC.set(0, 0, p.ci * px(1.5));
      pos.lerpVectors(tB, tC, p.collapse);
      size = lerp(p.circleSize, L.center, p.collapse);
      [w, h] = whOf(p, size);
    } else {
      pos.lerpVectors(p.from, p.sphere, p.ex).multiplyScalar(1 + .1 * Math.sin(Math.PI * p.ex));
      size = lerp(L.center, L.planeSize, p.ex);
      [w, h] = whOf(p, size);
      if (zi >= 0) {
        if (p.i === zi) {
          const availH = H - 290 * Z.o;
          let th = .7 * availH, tw = th * p.aspect;
          const maxW = L.phone ? W - 16 : W * .92;
          if (tw > maxW) { tw = maxW; th = tw / p.aspect; }
          tC.set(0, 145 * Z.o * pxk, 0).applyQuaternion(invQ);
          pos.lerp(tC, Z.z);
          w = lerp(w, tw, Z.z); h = lerp(h, th, Z.z);
        } else {
          pos.multiplyScalar(1 + 0.8 * Z.z);   // expandPush 1.8
          op *= lerp(1, .1, Z.z);              // expandFade 0.1
        }
      }
    }
    m.position.copy(pos); m.quaternion.copy(invQ);
    m.scale.set(w * pxk, h * pxk, 1);
    p.mat.opacity = op; m.visible = op > .003;
  }

  /* ---- DOM: подпись, обзор, курсор ---- */
  const capIn = $('#g-cap'), capT = $('#g-cap-t'), capC = $('#g-cap-c');
  let capCur = null;
  function setCaption(p) {
    if (p === capCur) return; capCur = p;
    gsap.killTweensOf(capIn);
    gsap.to(capIn, { yPercent: -110, duration: .25, ease: 'power2.in', onComplete: () => {
      if (!p) return;
      capT.textContent = p.item.title; capC.textContent = p.item.category;
      gsap.fromTo(capIn, { yPercent: 110 }, { yPercent: 0, duration: .6, ease: 'expo.out' });
    } });
  }
  const curX = gsap.quickTo(cursorEl, 'x', { duration: .5, ease: 'power3.out' });
  const curY = gsap.quickTo(cursorEl, 'y', { duration: .5, ease: 'power3.out' });
  let curShown = false;
  function showCur(on) {
    if (on === curShown) return; curShown = on;
    gsap.to(cursorEl, { opacity: on ? 1 : 0, scale: on ? 1 : .6, duration: .6, ease: 'power4.out', overwrite: 'auto' });
  }
  function fillOverview(it) {
    $('#ov-t').textContent = it.title; $('#ov-c').textContent = `${it.category}, ${it.year}`; $('#ov-d').textContent = it.desc;
    $('#ov-tags').innerHTML = '';
    [it.category, kindOf(it), 'Создано нейросетью'].forEach(t => { const s = document.createElement('span'); s.textContent = t; $('#ov-tags').appendChild(s); });
  }

  function zoomIn(p) {
    zoomOn = true; zi = p.i;
    p.mat.depthTest = false; p.mesh.renderOrder = 50;
    gsap.to(Z, { z: 1, duration: .8, ease: 'power4.out', overwrite: 'auto' });
    planes.forEach(q => setPlaying(q, q === p));
    if (p.video) safePlay(p.video);
    cursorEl.textContent = 'Подробнее'; setCaption(null);
  }
  function openOverview() {
    ovOpen = true; fillOverview(planes[zi].item);
    gsap.to(Z, { o: 1, duration: .8, ease: 'power4.out' });
    gsap.fromTo(ovEl, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7, ease: 'expo.out', delay: .12 });
    cursorEl.textContent = 'Закрыть';
  }
  function closeOverview() {
    ovOpen = false;
    gsap.to(Z, { o: 0, duration: .8, ease: 'power4.out' });
    gsap.to(ovEl, { y: 16, autoAlpha: 0, duration: .35, ease: 'power2.in' });
    cursorEl.textContent = 'Подробнее';
  }
  function collapse() {
    if (!zoomOn) return;
    zoomOn = false;
    if (ovOpen) closeOverview();
    showCur(false);
    const p = planes[zi];
    gsap.to(Z, { z: 0, duration: .8, ease: 'power4.out', overwrite: 'auto', onComplete: () => {
      p.mat.depthTest = true; p.mesh.renderOrder = 0; zi = -1;
    } });
  }
  $('#ov-x').addEventListener('click', e => { e.stopPropagation(); collapse(); });

  /* ---- ввод ---- */
  function pick(cx, cy) {
    const r = mount.getBoundingClientRect();
    ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const list = zoomOn ? [planes[zi].mesh]
      : planes.filter(p => p.mode === 'sphere' && p.ex > .9 && p.opacity > .5).map(p => p.mesh);
    const hit = raycaster.intersectObjects(list, false);
    return hit.length ? hit[0].object.userData.p : null;
  }
  mount.addEventListener('pointerdown', e => {
    if (!sphereReady) return;
    ptr.down = true; ptr.x = e.clientX; ptr.y = e.clientY; ptr.dx = e.clientX; ptr.dy = e.clientY; ptr.path = 0;
    try { mount.setPointerCapture(e.pointerId); } catch (_) {}
    mount.style.cursor = 'grabbing';
  });
  mount.addEventListener('pointermove', e => {
    curX(e.clientX + 14); curY(e.clientY + 14);
    ptr.x = e.clientX; ptr.y = e.clientY; ptr.inside = true; ptr.pending = true;
    if (ptr.down) {
      const dx = e.clientX - ptr.dx, dy = e.clientY - ptr.dy;
      ptr.path += Math.hypot(dx, dy); ptr.dx = e.clientX; ptr.dy = e.clientY;
      velX += dx * .001; velY += dy * .001; interacted = true;
    }
  });
  mount.addEventListener('pointerleave', () => { ptr.inside = false; if (!ptr.down) { hovered = null; setCaption(null); showCur(false); } });
  mount.addEventListener('pointerup', e => {
    if (!ptr.down) return; ptr.down = false;
    try { mount.releasePointerCapture(e.pointerId); } catch (_) {}
    const total = Math.hypot(e.clientX - ptr.x, e.clientY - ptr.y);
    if (ptr.path < 10) {
      const p = pick(e.clientX, e.clientY);
      if (zoomOn) { if (p && p.i === zi) ovOpen ? closeOverview() : openOverview(); else collapse(); }
      else if (p) { zoomIn(p); showCur(true); }
    }
    mount.style.cursor = '';
  });
  mount.addEventListener('wheel', e => { e.preventDefault(); if (!sphereReady) return; velX += e.deltaY * .0002; interacted = true; }, { passive: false });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && current === 'gallery') collapse(); });

  /* ---- кадр ---- */
  const camDir = new THREE.Vector3();
  function frame() {
    if (circleActive) circleRot += .5 * DEG * spinMul;
    if (sphereReady || introDone) {
      yawT += velX; pitchT += velY; velX *= .94; velY *= .94;
      yawS += (yawT - yawS) * .11; pitchS += (pitchT - pitchS) * .11;
      const dYaw = yawS - prevYaw, dPitch = pitchS - prevPitch; prevYaw = yawS; prevPitch = pitchS;
      qTmp.setFromAxisAngle(AX_Y, dYaw); group.quaternion.premultiply(qTmp);
      qTmp.setFromAxisAngle(AX_X, dPitch); group.quaternion.premultiply(qTmp);
      if (!interacted && !reduced && sphereReady) { qTmp.setFromAxisAngle(AUTO_AX, .001); group.quaternion.premultiply(qTmp); }
      group.quaternion.normalize();
    }
    invQ.copy(group.quaternion).invert();
    planes.forEach(updatePlane);
    group.updateMatrixWorld(true);
    if (sphereReady && ptr.pending && ptr.inside) {
      ptr.pending = false;
      const p = pick(ptr.x, ptr.y);
      if (!ptr.down) {
        if (p !== hovered) { hovered = p; if (!zoomOn) setCaption(p); }
        const cx = ptr.x - mount.getBoundingClientRect().left - W / 2, cy = ptr.y - mount.getBoundingClientRect().top - H / 2;
        mount.style.cursor = p ? 'pointer' : (Math.hypot(cx, cy) < 250 ? 'grab' : '');
        showCur(zoomOn && !!p);
      }
    }
    renderer.render(scene, camera);
  }
  function loop() { if (!running) return; raf = requestAnimationFrame(loop); frame(); }

  let vidTimer = 0;
  function startHemisphereTimer() {
    clearInterval(vidTimer);
    vidTimer = setInterval(() => {
      if (zoomOn || zi >= 0) { planes.forEach(q => setPlaying(q, q.i === zi && zoomOn)); return; }
      planes.forEach(q => {
        if (!q.video) return;
        q.mesh.getWorldPosition(camDir);
        const r = camDir.z / (camDir.length() || 1);
        if (r < -.25) setPlaying(q, false); else if (r > -.1) setPlaying(q, true);
      });
    }, 300);
  }

  /* ---- интро ---- */
  const wmC = $('#g-wm'), countEl = $('#g-count'), labels = el.querySelectorAll('.g-label span'), hint = $('#g-hint');
  function drawWordmark() {
    const d = dprOf(), f = '600 64px Geist';
    const m = textCanvas(10, 10, 1).ctx; m.font = f; const tw = Math.ceil(m.measureText('RITA.E').width) + 8;
    wmC.width = tw * d; wmC.height = 90 * d; const ctx = wmC.getContext('2d'); ctx.scale(d, d);
    ctx.font = f; ctx.fillStyle = '#ededeb'; ctx.textBaseline = 'middle'; ctx.fillText('RITA.E', 4, 47);
    wmC.style.width = '90px'; wmC.style.height = (90 * 90 / tw) + 'px';
  }
  function finishSphereFast() {
    planes.forEach(p => { p.mode = 'sphere'; p.ex = 1; p.opacity = 1; p.from.set(0, 0, 0); });
    sphereReady = true; introDone = true; hint.style.opacity = 1;
    labels.forEach(l => gsap.set(l, { yPercent: 0 })); gsap.set(labels, { yPercent: 0 });
    gsap.set(el.querySelectorAll('.g-label span'), { clearProps: 'transform' });
    showDock();
  }
  async function runIntro() {
    introStarted = true;
    planes.forEach(p => loadMedia(p));
    if (reduced) { await wait(.3); finishSphereFast(); return; }
    gsap.delayedCall(.2, () => planes.forEach(startVideo));
    gsap.to(wmC, { opacity: 1, duration: .6, delay: .2 });
    gsap.set(labels, { yPercent: 100 });
    gsap.to(labels, { yPercent: 0, duration: .9, ease: 'expo.out', stagger: .07, delay: .5 });
    const cnt = { v: 1 }; const showCnt = () => countEl.textContent = String(Math.round(cnt.v)).padStart(3, '0');
    gsap.to(countEl, { yPercent: 0, duration: .75, ease: 'power4.out', delay: .5 });
    const upd = gsap.ticker.add(() => {
      const ready = planes.slice(0, circleN).filter(p => p.ready).length;
      const tgt = Math.min(99, Math.round(ready / circleN * 100));
      if (tgt > cnt.v && !gsap.isTweening(cnt)) gsap.to(cnt, { v: tgt, duration: .5, ease: 'power1.out', onUpdate: showCnt });
    });
    const t0 = performance.now();
    await wait(2);
    await new Promise(r => { const chk = () => (planes.slice(0, circleN).every(p => p.ready) || performance.now() - t0 > 30000) ? r() : setTimeout(chk, 100); chk(); });
    gsap.ticker.remove(upd);
    gsap.killTweensOf(cnt);
    gsap.to(cnt, { v: 100, duration: .5, ease: 'power1.out', onUpdate: showCnt });
    await wait(.5);
    gsap.to(countEl.parentElement, { yPercent: -150, opacity: 0, duration: .6, ease: 'power2.in' });
    // круг
    circleActive = true; spinMul = 1;
    for (let i = 0; i < circleN; i++) {
      const p = planes[i]; p.mode = 'circle'; p.opacity = 0; p.circleSize = .01; p.collapse = 0;
      gsap.to(p, { opacity: 1, duration: 1, ease: 'power3.out', delay: i * .1 });
      gsap.to(p, { circleSize: L.circleSize, duration: 1, ease: 'back.out(1.7)', delay: i * .1 });
    }
    await wait(1.3 + circleN * .1);
    const sp = { v: 1 };
    gsap.to(sp, { v: 7.3, duration: 1, ease: 'power2.in', onUpdate: () => spinMul = sp.v });
    await wait(.8);
    gsap.to(wmC, { opacity: 0, duration: .75, ease: 'power2.inOut' });
    gsap.to(labels, { yPercent: -100, duration: .7, ease: 'expo.in', stagger: .07 });
    for (let i = 0; i < circleN; i++) gsap.to(planes[i], { collapse: 1, duration: 1.25, ease: 'power2.inOut', delay: i * .05 });
    await wait(1.25 + circleN * .05 + .2);
    // взрыв
    circleActive = false;
    planes.forEach(p => {
      if (p.i < circleN) p.from.set(0, 0, p.ci * px(1.5)); else { p.from.set(0, 0, 0); p.opacity = 0; p.mode = 'hidden'; }
    });
    planes.forEach(p => {
      p.mode = 'sphere'; p.ex = 0;
      gsap.to(p, { ex: 1, duration: 1, ease: 'power3.out' });
      if (p.i >= circleN) gsap.to(p, { opacity: 1, duration: .3 });
    });
    sphereReady = true; introDone = true;
    gsap.set(labels, { yPercent: 100 });
    gsap.to(labels, { yPercent: 0, duration: .9, ease: 'expo.out', stagger: .07 });
    showDock();
    gsap.to(hint, { opacity: 1, duration: 1, delay: .6 });
  }

  /* ---- интерфейс вида ---- */
  return {
    el,
    async build() {
      if (built) return; built = true;
      mount.appendChild(renderer.domElement);
      layout(); drawWordmark();
      gsap.set(countEl.parentElement, { opacity: 1 });
      window.addEventListener('resize', () => { if (built) layout(); });
    },
    enter() {
      running = true; loop(); startHemisphereTimer();
      if (!introStarted) runIntro();
      else planes.forEach(q => { if (!zoomOn) setPlaying(q, true); });
    },
    leave() { running = false; cancelAnimationFrame(raf); clearInterval(vidTimer); planes.forEach(q => setPlaying(q, false)); collapse(); },
  };
}

/* ===================================================================
   ВИД 2 — РАБОТЫ (горизонтальная лента, обычный DOM + CSS-трансформации + GSAP)
   =================================================================== */
// Группы (сейчас не показываются, оставлены на будущее). Ключ — id работы из WORKS.
// Новая работа без группы попадёт в «РАБОТЫ»; можно также добавить поле group в WORKS.
const GROUP_OF = { 17: 'ЛУКБУК', 18: 'ЛУКБУК', 19: 'ЛУКБУК', 13: 'МИЯ', 21: 'МИЯ', 22: 'МИЯ', 20: 'SELA',
  1: 'РИТА', 2: 'РИТА', 3: 'РИТА', 4: 'РИТА', 5: 'РИТА', 6: 'РИТА', 7: 'ПЕРСОНАЖИ', 8: 'ПЕРСОНАЖИ', 10: 'ПЕРСОНАЖИ', 11: 'ПЕРСОНАЖИ', 12: 'ФИЛЬМ' };

function createProjects() {
  const el = $('#projects'), bubble = $('#p-bubble'), lb = $('#lb');
  let built = false, running = false, raf = 0, entered = false;
  let W = 1, H = 1, phone = false, maxOff = 0, lastPlayEval = 0;
  let target = 0, offset = 0, prevOff = 0, skewS = 0, vel = 0, lbOpen = false, hovered = null;
  const cards = WORKS.map((item, i) => ({ item, i, aspect: 9 / 16, x: 0, y: 0, w: 1, h: 1, fx: 0, o: reduced ? 1 : 0, hs: 1, dim: 1, video: null, play: false,
    group: item.group || GROUP_OF[item.id] || 'РАБОТЫ' }));
  

  /* ---- DOM ---- */
  function buildDom() {
    el.innerHTML = '';
    cards.forEach((c, i) => {
      const card = document.createElement('div'); card.className = 'pj-card'; c.el = card;
      const idx = document.createElement('span'); idx.className = 'pj-idx'; idx.textContent = i + 1;
      const media = document.createElement('div'); media.className = 'pj-media';
      const inn = document.createElement('div'); inn.className = 'pj-in'; c.in = inn;
      const img = document.createElement('img'); img.alt = c.item.title; img.draggable = false; img.src = c.item.poster; c.img = img;
      inn.appendChild(img); media.appendChild(inn);
      const cap = document.createElement('span'); cap.className = 'pj-cap'; cap.textContent = `${c.item.title} (${c.item.category})`;
      card.append(idx, media, cap); el.appendChild(card);
      card.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') setHover(c); });
      card.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && hovered === c) setHover(null); });
    });
  }

  /* ---- раскладка ---- */
  function layout() {
    W = el.clientWidth || innerWidth; H = el.clientHeight || innerHeight; phone = W <= 640;
    const stageTop = phone ? 56 : 64, stageBottom = H - (phone ? 88 : 92), stageH = Math.max(140, stageBottom - stageTop); // по центру между верхом и доком
    const hs = phone ? [46, 38] : [42, 34, 48, 38], offs = phone ? [-2, 2, -3, 3] : [-2, 3, -3, 2];
    let x = phone ? 16 : Math.max(32, W * .07);
    cards.forEach((c, i) => {
      const off = offs[i % offs.length] / 100 * H;
      let h = Math.min(hs[i % hs.length] / 100 * H, stageH - 2 * Math.abs(off));
      let w = h * c.aspect; const mw = W - (phone ? 32 : 64); if (w > mw) { w = mw; h = w / c.aspect; }
      c.w = w; c.h = h; c.x = x; c.y = stageTop + stageH / 2 - h / 2 + off; x += w + 14;
      c.el.style.width = w + 'px'; c.el.style.height = h + 'px';
    });
    maxOff = Math.max(0, x - 14 + (phone ? 16 : 32) - W);
    target = clamp(target, 0, maxOff); offset = clamp(offset, 0, maxOff);
  }

  /* ---- видео ---- */
  function ensureVideo(c) {
    if (c.video || c.item.type !== 'video') return;
    const v = c.video = makeVideo(c.item, 'auto'); v.draggable = false;
    v.addEventListener('loadeddata', () => v.classList.add('on'));
    c.in.appendChild(v);
  }
  function setPlay(c, on) {
    if (c.play === on) return; c.play = on;
    if (c.item.type !== 'video') return;
    if (on) { ensureVideo(c); safePlay(c.video); } else if (c.video) c.video.pause();
  }

  /* ---- наведение ---- */
  const bx = gsap.quickTo(bubble, 'x', { duration: .5, ease: 'power3.out' }), by = gsap.quickTo(bubble, 'y', { duration: .5, ease: 'power3.out' });
  gsap.set(bubble, { xPercent: -50, yPercent: -50 });
  let bubbleOn = false;
  function showBubble(on) { if (on === bubbleOn) return; bubbleOn = on; gsap.to(bubble, { opacity: on ? 1 : 0, scale: on ? 1 : .6, duration: on ? .75 : .6, ease: 'power4.out', overwrite: 'auto' }); }
  function setHover(c) {
    hovered = c;
    cards.forEach(k => { k.el.classList.toggle('hov', k === c); gsap.to(k, { hs: k === c ? 1.04 : 1, dim: c && k !== c ? .55 : 1, duration: .4, ease: 'power2.out', overwrite: 'auto' }); });
    showBubble(!!c && !lbOpen);
  }

  /* ---- ввод ---- */
  const drag = { on: false, x: 0, y: 0, sx: 0, sy: 0, card: null, last: 0 };
  el.addEventListener('wheel', e => { e.preventDefault(); if (lbOpen) return; const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; target = clamp(target + d, 0, maxOff); }, { passive: false });
  el.addEventListener('pointerdown', e => {
    if (lbOpen || e.target.closest('button,a')) return;
    drag.on = true; drag.x = drag.sx = e.clientX; drag.y = drag.sy = e.clientY; drag.card = e.target.closest('.pj-card'); vel = 0;
  });
  window.addEventListener('pointermove', e => {
    if (current !== 'projects') return;
    if (e.pointerType === 'mouse') { bx(e.clientX); by(e.clientY); }
    if (!drag.on) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
    const d = -(Math.abs(dx) >= Math.abs(dy) ? dx : dy);
    target = clamp(target + d, 0, maxOff); vel = d;
  });
  window.addEventListener('pointerup', e => {
    if (!drag.on) return; drag.on = false;
    if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 8 && drag.card && !lbOpen) { const c = cards.find(k => k.el === drag.card); if (c) openLB(c); }
  });
  window.addEventListener('pointercancel', () => drag.on = false);
  window.addEventListener('keydown', e => {
    if (current !== 'projects') return;
    if (e.key === 'Escape') closeLB();
    else if (!lbOpen) { const s = { ArrowRight: 220, ArrowLeft: -220, ArrowDown: 220, ArrowUp: -220 }[e.key]; if (s) target = clamp(target + s, 0, maxOff); }
  });

  /* ---- лайтбокс ---- */
  function fitMedia(mw, aspect) {
    const maxW = Math.min(1100, innerWidth - 32), maxH = innerHeight * .7;
    let w = maxW, h = w / aspect; if (h > maxH) { h = maxH; w = h * aspect; }
    mw.style.width = w + 'px'; mw.style.height = h + 'px';
  }
  function openLB(c) {
    lbOpen = true; const it = c.item, mw = $('#lb-mw'); mw.innerHTML = '';
    let m;
    if (it.type === 'video') { m = document.createElement('video'); m.muted = true; m.loop = true; m.playsInline = true; m.setAttribute('playsinline', ''); m.autoplay = true; m.poster = it.poster; m.src = it.file; m.addEventListener('loadedmetadata', () => fitMedia(mw, m.videoWidth / m.videoHeight)); safePlay(m); }
    else { m = document.createElement('img'); m.src = it.file; }
    mw.appendChild(m); fitMedia(mw, c.aspect);
    $('#lb-t').textContent = it.title; $('#lb-c').textContent = `${it.category}, ${it.year}`; $('#lb-d').textContent = it.desc;
    gsap.to(lb, { autoAlpha: 1, duration: .45 });
    gsap.fromTo(mw, { scale: .94, y: 20 }, { scale: 1, y: 0, duration: .9, ease: 'expo.out' });
    showBubble(false);
  }
  function closeLB() {
    if (!lbOpen) return; lbOpen = false;
    gsap.to(lb, { autoAlpha: 0, duration: .35, onComplete: () => { const v = $('#lb-mw video'); if (v) { v.pause(); v.removeAttribute('src'); v.load(); } $('#lb-mw').innerHTML = ''; } });
  }
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  $('#lb-x').addEventListener('click', closeLB);

  /* ---- кадр ---- */
  function frame() {
    vel *= .95; if (!drag.on && Math.abs(vel) > .05) target = clamp(target + vel, 0, maxOff);
    offset += (target - offset) * .08; offset = clamp(offset, 0, maxOff);
    const sp = offset - prevOff; prevOff = offset; skewS += (sp - skewS) * .15; if (Math.abs(skewS) < .005) skewS = 0;
    const k = reduced ? 0 : clamp(skewS / 40, -1, 1), skew = -k * 8, sc = 1 - .04 * Math.abs(k);
    const evalPlay = performance.now() - lastPlayEval > 150; if (evalPlay) lastPlayEval = performance.now();
    cards.forEach(c => {
      const sx = c.x - offset + c.fx;
      c.el.style.transform = `translate3d(${sx.toFixed(2)}px,${c.y.toFixed(2)}px,0) scale(${(sc * c.hs).toFixed(4)}) skewX(${skew.toFixed(3)}deg)`;
      c.el.style.opacity = (c.o * c.dim).toFixed(3);
      if (!reduced) { const dist = clamp((sx + c.w / 2 - W / 2) / (W / 2), -1, 1); c.in.style.transform = `translate3d(${(-dist * .06 * c.w).toFixed(2)}px,0,0)`; }
      if (evalPlay) { const cx = c.x - offset; setPlay(c, cx + c.w > -.2 * W && cx < 1.2 * W); }
    });
  }
  function loop() { if (!running) return; raf = requestAnimationFrame(loop); frame(); }

  function entrance() {
    if (entered) return; entered = true;
    if (reduced) { cards.forEach(c => { c.o = 1; c.fx = 0; }); return; }
    cards.forEach((c, i) => { c.fx = W * .4; c.o = 0; gsap.to(c, { fx: 0, o: 1, duration: 1.1, ease: 'expo.out', delay: .3 + i * .05 }); });
  }

  return {
    el,
    async build() {
      if (built) return; built = true;
      buildDom();
      // реальные пропорции берём из постеров (не дольше 3 секунд)
      cards.forEach(c => { if (c.item.aspect) c.aspect = c.item.aspect; }); // пропорции заданы в WORKS — не ждём загрузки постеров
      await Promise.race([Promise.all(cards.filter(c => !c.item.aspect).map(async c => { const im = await loadImage(c.item.poster); if (im && im.naturalHeight) c.aspect = im.naturalWidth / im.naturalHeight; })), wait(3)]);
      layout(); window.addEventListener('resize', () => { if (built) layout(); });
    },
    enter() { running = true; lastPlayEval = 0; loop(); entrance(); },
    leave() { running = false; cancelAnimationFrame(raf); cards.forEach(c => setPlay(c, false)); setHover(null); closeLB(); },
  };
}

/* ===================================================================
   ВИД 3 — ОБО МНЕ
   =================================================================== */
function createAbout() {
  const el = $('#about'), mount = $('#a-canvas'), hintEl = $('#a-hint');
  let built = false, running = false, raf = 0, firstVisit = true;
  const dpr = dprOf();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(dpr); renderer.setClearColor(0x0c0c0d, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NoToneMapping;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0c0c0d);
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 100); camera.position.z = 13;
  const bgRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType });
  const geo = new THREE.PlaneGeometry(1, 1);
  let W = 1, H = 1, unit = .02, phone = false;

  // окружение для хрома
  (function () {
    const room = new THREE.Scene();
    room.add(new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ color: 0x0a0a0b, side: THREE.BackSide })));
    const panel = (w, h, x, y, z, k, rx, ry) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color().setScalar(k), side: THREE.DoubleSide }));
      m.position.set(x, y, z); m.rotation.set(rx || 0, ry || 0, 0); room.add(m);
    };
    panel(14, 5, 0, 6, 0, 1.1, Math.PI / 2, 0);
    panel(3.2, 10, -6, 0, 0, 1.0, 0, Math.PI / 2);
    panel(2.4, 10, 6, 0, 0, .85, 0, -Math.PI / 2);
    panel(12, 2.2, 0, -1.5, -6, .6, 0, 0);
    panel(5, 4, 3, 2.5, 6, .8, 0, Math.PI);
    panel(14, 6, 0, -6, 0, .22, -Math.PI / 2, 0);
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(room, .04).texture; pm.dispose();
  })();

  /* ---------- робот ---------- */
  const bu = { uReveal: { value: 0 }, uMinY: { value: 0 }, uMaxY: { value: 1 }, uBand: { value: .97 }, uInvInner: { value: new THREE.Matrix4() },
    uHit: { value: new THREE.Vector3() }, uHover: { value: 0 }, uTime: { value: 0 } };
  const FRAG_COMMON = `#include <common>
varying vec3 vRP; uniform float uReveal,uMinY,uMaxY,uBand,uHover,uTime; uniform vec3 uHit;
float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float vnoise(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y); }`;
  const REVEAL = `
float nzv=vnoise(vRP.xz*2.2+vec2(uTime*0.6,vRP.y*0.5));
float frontY=mix(uMinY-uBand,uMaxY+0.25*uBand,uReveal)+(nzv-0.5)*2.0*0.95*(1.0-uReveal);
float rvD=frontY-vRP.y;
if(rvD<0.0) discard;`;
  const GLOW = `
{
  float fade=1.0-smoothstep(0.75,1.0,uReveal);
  float lq=(1.0-smoothstep(0.0,uBand,rvD))*fade;
  gl_FragColor.rgb=mix(gl_FragColor.rgb,gl_FragColor.rgb*0.5+vec3(0.56,0.63,1.0)*0.55,lq*0.85);
  float mn=pow(clamp(1.0-rvD/0.14,0.0,1.0),3.0)*1.4*(0.75+0.25*sin(uTime*6.0+vRP.x*8.0))*fade;
  gl_FragColor.rgb+=vec3(0.086,0.13,1.0)*mn;
  float dh=distance(vRP,uHit);
  float gl=pow(clamp(1.0-dh/1.09,0.0,1.0),3.0)*0.4*uHover;
  gl_FragColor.rgb+=vec3(0.086,0.13,1.0)*gl;
}`;
  function inject(mat) {
    mat.onBeforeCompile = sh => {
      Object.keys(bu).forEach(k => sh.uniforms[k] = bu[k]);
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vRP; uniform mat4 uInvInner;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRP=(uInvInner*modelMatrix*vec4(transformed,1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', FRAG_COMMON)
        .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\n' + REVEAL)
        .replace('#include <dithering_fragment>', GLOW + '\n#include <dithering_fragment>');
    };
  }
  const chrome = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: .07 });
  const visorMat = new THREE.MeshPhysicalMaterial({ color: 0x040405, metalness: .3, roughness: .12, clearcoat: 1, clearcoatRoughness: .04 });
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xf2f2ee });
  [chrome, visorMat, eyeMat].forEach(inject);

  const root = new THREE.Group(), rig = new THREE.Group(), inner = new THREE.Group();
  root.add(rig); rig.add(inner);
  const hs = new THREE.Vector3(1.1, 1, .98);
  const head = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), chrome); head.scale.copy(hs); inner.add(head);
  const visor = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 32, Math.PI / 2 - 1.02, 2.04, Math.PI / 2 - .5, 1.0), visorMat);
  visor.scale.copy(hs).multiplyScalar(1.015); inner.add(visor);
  const eyes = [];
  [-.3, .3].forEach(x => {
    const e = new THREE.Mesh(new THREE.CapsuleGeometry(.075, .2, 8, 16), eyeMat);
    const ex = 1.1 * 1.015, ey = 1.015, ez = .98 * 1.015, y = .03;
    const z = ez * Math.sqrt(Math.max(0, 1 - (x / ex) ** 2 - (y / ey) ** 2));
    e.position.set(x, y, z + .008); e.scale.set(1, 1, .45); inner.add(e); eyes.push(e);
  });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(.022, .03, .42, 24), chrome); stem.position.y = 1.15; inner.add(stem);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(.095, 32, 24), chrome); ball.position.y = 1.38; inner.add(ball);
  [-1, 1].forEach(s => {
    const t = new THREE.Mesh(new THREE.TorusGeometry(.2, .065, 24, 48), chrome); t.position.x = 1.1 * s; t.rotation.y = Math.PI / 2; inner.add(t);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(.15, .15, .06, 32), visorMat); cap.position.x = 1.1 * s + .0 * s; cap.rotation.z = Math.PI / 2; inner.add(cap);
  });
  const haloTilt = new THREE.Group(); haloTilt.position.y = -1.28; haloTilt.rotation.x = .92 * Math.PI / 2; inner.add(haloTilt);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(.78, .05, 24, 96), chrome); haloTilt.add(halo);
  inner.updateMatrixWorld(true);
  const bbox = new THREE.Box3().setFromObject(inner), bc = bbox.getCenter(new THREE.Vector3()), bsz = bbox.getSize(new THREE.Vector3());
  bu.uMinY.value = bbox.min.y; bu.uMaxY.value = bbox.max.y;
  inner.position.set(-bc.x, -bc.y, -bc.z);
  root.position.z = -1; scene.add(root);
  // для расчёта координат внутри inner
  const botMeshes = []; root.traverse(o => { if (o.isMesh) botMeshes.push(o); });

  // диск-линза
  const discMat = new THREE.ShaderMaterial({
    uniforms: { uBg: { value: bgRT.texture }, uRes: { value: new THREE.Vector2(1, 1) }, uRadiusPx: { value: 1 }, uDissolve: { value: 0 } },
    vertexShader: `void main(){ gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `
uniform sampler2D uBg; uniform vec2 uRes; uniform float uRadiusPx,uDissolve;
void main(){
  vec2 c=uRes*0.5; vec2 p=gl_FragCoord.xy-c; float nd=length(p)/uRadiusPx;
  if(nd>1.0) discard;
  float dl=uDissolve;
  float distAmt=1.0-min(dl/0.8,1.0), lightAmt=1.0-min(dl/0.6,1.0), alpha=1.0-smoothstep(0.8,1.0,dl);
  float pull=0.5*0.30*nd*nd*distAmt;
  float rim=smoothstep(0.85,1.0,nd)*0.2344*distAmt;
  vec2 base=c+p*(1.0-pull-rim);
  float disp=1.64*0.004*smoothstep(0.6,1.0,nd)*distAmt;
  vec3 col=vec3(0.0), ws=vec3(0.0);
  for(int i=0;i<8;i++){
    float t=float(i)/7.0; float o=(t-0.5)*2.0*disp;
    vec2 sp=c+(base-c)*(1.0+o*8.0);
    vec3 s=texture2D(uBg,sp/uRes).rgb;
    vec3 w=vec3(exp(-pow((t-0.85)/0.35,2.0)),exp(-pow((t-0.5)/0.35,2.0)),exp(-pow((t-0.15)/0.35,2.0)));
    col+=s*w; ws+=w;
  }
  col/=ws;
  float r=nd*0.5;
  vec3 blue=vec3(0.0185,0.0242,0.386);
  float nova=exp(-pow((r-0.5)/(4.0*11.0*0.003*0.5),2.0))*0.285*11.0/17.0*1.15;
  float ring=exp(-pow((r-0.49)/0.08,2.0))*0.9*11.0/17.0*1.8+exp(-pow((r-0.49)/0.25,2.0))*0.12;
  float thin=exp(-pow((r-0.483)/0.006,2.0))*0.6;
  float edge=exp(-pow((r-0.478)/0.06,2.0))*1.053;
  vec3 light=vec3(nova+thin)+blue*(ring+edge)*3.0;
  col+=light*lightAmt;
  gl_FragColor=vec4(col,alpha);
  #include <colorspace_fragment>
}`, transparent: true, depthWrite: false, depthTest: false });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1, 96), discMat); disc.position.z = -7.9; disc.visible = false; disc.renderOrder = 100; scene.add(disc);

  /* ---------- состояние бота ---------- */
  const st = { rot: { x: 0, y: 0, z: 0 }, tg: { x: -.62, y: .59, z: .2 }, shake: 0, hit: { x: 0, y: 0, z: 0 }, spinY: 0, blink: 1, sleepEye: 1, hitEye: 1,
    phase: 0, floatY: 0, speed: 1, amp: 1 };
  let mouseMoved = false, sleeping = false, lastInput = performance.now(), frozen = false, busy = false, hitIdx = 0, hoverTarget = 0;
  let fxScale = 0, fxDissolving = false;

  function revealBot() {
    bu.uReveal.value = 0;
    const o = { v: 0 };
    gsap.to(o, { v: 1, duration: reduced ? .01 : 3.85, ease: 'power2.out', delay: reduced ? 0 : (firstVisit ? 1 : .45), onUpdate: () => bu.uReveal.value = o.v });
    firstVisit = false;
  }
  function scheduleBlink() {
    gsap.delayedCall(3 + Math.random() * 2, () => {
      if (!running) { scheduleBlink(); return; }
      if (!sleeping && !busy) gsap.to(st, { blink: .1, duration: .09, yoyo: true, repeat: 1, ease: 'none' });
      scheduleBlink();
    });
  }
  function headShake() {
    const tl = gsap.timeline();
    tl.to(st, { shake: .22, duration: .09 }).to(st, { shake: -.18, duration: .12 }).to(st, { shake: .1, duration: .11 }).to(st, { shake: 0, duration: .18 });
  }
  function goSleep() {
    if (sleeping) return; sleeping = true;
    gsap.to(st, { sleepEye: .2, duration: 1.1, ease: 'power2.inOut' });
    gsap.to(st.tg, { x: .42, y: 0, z: .12, duration: 1.4, ease: 'power2.inOut' });
    gsap.to(st, { speed: .35, amp: 1.6, duration: 1.6 });
  }
  function wake() {
    if (!sleeping) return; sleeping = false;
    gsap.killTweensOf(st.tg); gsap.killTweensOf(st, 'sleepEye');
    st.sleepEye = 1; gsap.to(st, { speed: 1, amp: 1, duration: .8 });
    if (mouseMoved) setTarget(lastMX, lastMY);
    headShake();
  }
  function noteInput() { lastInput = performance.now(); if (sleeping) wake(); }
  let lastMX = 0, lastMY = 0;
  function setTarget(mx, my) {
    st.tg.x = clamp((my - H / 2) / (H / 2), -.62, .62);
    st.tg.y = clamp((mx - W / 2) / (W / 2), -.59, .59);
    st.tg.z = .2 * ((mx - W / 2) / (W / 2));
  }

  function clickBot() {
    if (busy || bu.uReveal.value < .8) return;
    busy = true; frozen = true;
    // линза
    fxDissolving = false; discMat.uniforms.uDissolve.value = 0; disc.visible = true; fxScale = 0;
    const o = { s: 0 };
    gsap.to(o, { s: 10, duration: 4, ease: 'expo.out', onUpdate: () => {
      fxScale = o.s;
      if (o.s > 6.14 && !fxDissolving) {
        fxDissolving = true;
        gsap.to(discMat.uniforms.uDissolve, { value: 1, duration: .8975, ease: 'sine.inOut', onComplete: () => {
          disc.visible = false; fxScale = 0; busy = false; frozen = false; discMat.uniforms.uDissolve.value = 0;
        } });
      }
    } });
    // реакция
    const tl = gsap.timeline();
    if (hitIdx++ % 2 === 0) {
      tl.to(st.hit, { x: -.45, y: .18, duration: .16, ease: 'power3.out' }, 0)
        .to(st, { hitEye: .1, duration: .1 }, 0)
        .to(st.hit, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.45)' }, .16)
        .to(st, { hitEye: 1, duration: .3 }, .3);
    } else {
      tl.to(st, { spinY: Math.PI * 2, duration: 1.1, ease: 'power3.inOut' }, 0)
        .to(st.hit, { z: .25, duration: .5, ease: 'power2.out' }, 0)
        .to(st.hit, { z: 0, duration: .9, ease: 'elastic.out(1,.5)' }, .5)
        .set(st, { spinY: 0 });
    }
    tl.add(headShake);
  }

  /* ---------- текстовая дорожка ---------- */
  const measure = textCanvas(10, 10, 1).ctx;
  const textGroup = new THREE.Group(); scene.add(textGroup);
  let blocks = [], headline = null, sub = null, subRect = null, subMask = null, subHover = false, L = 1000, trackOff = 0, trackTgt = 0, trackVel = 0;
  const wrapL = x => ((((x + L / 2) % L) + L) % L) - L / 2;

  function wrapWords(text, font, maxW) {
    measure.font = font; const words = text.split(' '), out = []; let cur = '';
    for (const w of words) { const t = cur ? cur + ' ' + w : w; if (measure.measureText(t).width > maxW && cur) { out.push(cur); cur = w; } else cur = t; }
    if (cur) out.push(cur); return out;
  }
  const HEAD = '500 12px Geist';
  function blockSpec(def, bw) {
    // возвращает строки: {text,font,color,h,gap,link}
    const lines = []; const head = t => lines.push({ text: t, font: HEAD, color: '#8a8a88', h: 16, gap: 0 });
    const body = (arr, font, h, gap0, gap, extra = {}) => arr.forEach((t, i) => lines.push({ text: t, font, color: '#ededeb', h, gap: i === 0 ? gap0 : gap, ...extra }));
    const maxItemW = phone ? bw : 460;
    const itemsBody = (arr, font, h, gap0, gap) => { let first = true; arr.forEach(t => wrapWords(t, font, maxItemW).forEach((w, j) => { lines.push({ text: w, font, color: '#ededeb', h, gap: first ? gap0 : (j ? 2 : gap) }); first = false; })); };
    switch (def.kind) {
      case 'para': head(def.head); body(wrapWords(def.body, '300 22px Literata', Math.min(320, bw)), '300 22px Literata', 29, 16, 0); break;
      case 'list': head(def.head); itemsBody(def.items, '400 18px Literata', 23, 16, 7); break;
      case 'stats': head(def.head); itemsBody(def.items, '400 18px Geist', 23, 16, 9); break;
      case 'chapter': head(def.head); body([def.num], '300 72px Literata', 72, 12, 0);
        body(wrapWords(def.body, '300 19px Literata', Math.min(300, bw)), '300 19px Literata', 26, 14, 0); break;
      case 'quote': { const f = `italic 300 ${phone ? 30 : 40}px Literata`, step = (phone ? 30 : 40) * 1.12;
        body(wrapWords(def.body, f, Math.min(440, bw)), f, step, 0, 0); lines.push({ text: def.by, font: HEAD, color: '#8a8a88', h: 16, gap: 18 }); break; }
      case 'links': head(def.head);
        def.items.forEach((it, i) => wrapWords(it.t, '300 22px Literata', phone ? bw : 460).forEach((w, j) => lines.push({ text: w, font: '300 22px Literata', color: it.link ? '#ededeb' : '#8a8a88', h: 30, gap: j ? 0 : (i === 0 ? 16 : 8), link: it.link || null })));
        break;
    }
    return lines;
  }
  const DEFS = [
    { kind: 'para', head: 'ИИ-персонаж', body: 'Одна героиня для всех роликов бренда. Лицо не меняется от кадра к кадру.' },
    { kind: 'list', head: 'Что делаю', items: ['ИИ-персонажи', 'Рекламные ролики', 'Фэшн-лукбуки', 'Сюжетные истории'] },
    { kind: 'chapter', head: 'Часть первая  ·  Сценарий', num: 'I', body: 'Сначала раскадровка, потом ролик. Героя, сцены и текст вы утверждаете до начала работы.' },
    { kind: 'quote', body: '«Её не существует. Это кадр нейросети.»', by: '— про любую героиню на этом сайте' },
    { kind: 'stats', head: 'Цены', items: ['от 7 000 ₽  Персонаж с одним лицом', '15 фото · 5 образов · 3 дня', 'под задачу  Ролик и реклама', 'под задачу  Лукбук'] },
    { kind: 'para', head: 'Реклама', body: 'Фото и ролики с вашим товаром, без съёмки и моделей.' },
    { kind: 'chapter', head: 'Часть вторая  ·  Проба', num: 'II', body: 'Сначала пришлю пробный кадр. По нему решите, делаем ли дальше.' },
    { kind: 'list', head: 'Кто за кадром', items: ['Маркетолог, РУДН', 'Портфолио для бренда с оборотом 400+ млн ₽', 'Работаю удалённо'] },
    { kind: 'quote', body: '«Персонаж живёт дольше одного ролика.»', by: '— зачем бренду своё ИИ-лицо' },
    { kind: 'links', head: 'Связаться', items: [
      { t: 'Написать в Telegram →', link: { url: CONTACT_URL, blank: true } },
      { t: 'Telegram-канал с работами →', link: { url: CHANNEL_URL, blank: true } },
      { t: 'Написать в Instagram →', link: { url: INSTAGRAM_URL, blank: true } },
      { t: 'Смотреть все работы →', link: { url: '#projects', blank: false } },
      { t: 'Напишите: что за бизнес, где будет ролик и к какому сроку' }] },
  ];

  function disposeText() {
    textGroup.children.slice().forEach(m => { textGroup.remove(m); if (m.material.map) m.material.map.dispose(); m.material.dispose(); });
    blocks = [];
  }
  function mkPlane(canvas, z) {
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: canvasTex(canvas), transparent: true, depthWrite: false, toneMapped: false }));
    m.position.z = z; textGroup.add(m); return m;
  }
  function buildText() {
    disposeText();
    // --- заголовок ---
    const base = phone ? 62 : 75;
    const lines = ['Героиня с одним лицом', 'для рекламы и лукбуков', 'без съёмок и моделей.'];
    let fs = base; const avail = W - (phone ? 32 : 64);
    const fontOf = s => `300 ${s}px Literata`;
    measure.font = fontOf(fs);
    // ужимаем под самое длинное слово и под ширину
    const words = lines.join(' ').split(' ');
    const widest = Math.max(...words.map(w => measure.measureText(w).width));
    if (widest > avail) fs = Math.floor(fs * avail / widest);
    let out = lines.slice();
    const maxLine = () => Math.max(...out.map(l => { measure.font = fontOf(fs); return measure.measureText(l).width; }));
    if (maxLine() > avail) {
      if (W <= 1024) {
        // сначала уменьшаем шрифт (не мельче 24px), чтобы каждая строка влезла целиком; переносим, только если не хватило
        fs = Math.max(24, Math.floor(fs * avail / maxLine()));
        if (maxLine() > avail) { out = []; lines.forEach(l => out.push(...wrapWords(l, fontOf(fs), avail))); }
      }
      else { fs = Math.floor(fs * avail / maxLine()); }
    }
    const lh = fs * 1.18;
    const { c, ctx } = textCanvas(W, H, dpr);
    ctx.fillStyle = '#ededeb'; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.font = fontOf(fs); try { ctx.letterSpacing = (-0.01 * fs) + 'px'; } catch (e) {}
    const total = out.length * lh, subGap = 56;
    const top = H / 2 - (total + subGap + 14) / 2;
    out.forEach((l, i) => ctx.fillText(l, W / 2, top + lh * i + fs * .85));
    try { ctx.letterSpacing = '0px'; } catch (e) {}
    // подпись
    const sfs = phone ? 12 : 14, t1 = 'Маркетолог (РУДН) · ', t2 = 'пришлю пробный кадр';
    ctx.font = `500 ${sfs}px Geist`; ctx.textAlign = 'left'; ctx.fillStyle = '#8a8a88';
    const w1 = ctx.measureText(t1).width, w2 = ctx.measureText(t2).width, sx = (W - w1 - w2) / 2, sy = top + total + subGap;
    ctx.fillStyle = '#ededeb'; ctx.fillText(t1, sx, sy); ctx.fillText(t2, sx + w1, sy);
    headline = mkPlane(c, -8); headline.scale.set(W * unit, H * unit, 1);
    subRect = { x0: sx + w1 - W / 2, x1: sx + w1 + w2 - W / 2, yc: H / 2 - (sy - sfs * .35), h: sfs * 1.6 };
    subMask = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x0c0c0d, transparent: true, opacity: 0, depthWrite: false }));
    subMask.position.z = -7.98; textGroup.add(subMask);

    // --- блоки ---
    const bw = phone ? Math.min(W - 56, 300) : 320;
    const bandY = phone ? 64 : 78;
    let x = W / 2 + (phone ? 70 : 200);
    DEFS.forEach((def, bi) => {
      const side = bi % 2 === 0 ? 'top' : 'bottom';
      const specs = blockSpec(def, bw);
      let y = 0; const lns = [];
      specs.forEach(sp => {
        y += sp.gap; measure.font = sp.font; const tw = Math.ceil(measure.measureText(sp.text).width);
        const cw = tw + 8, ch = Math.ceil(sp.h + 12);
        const { c: lc, ctx: lx } = textCanvas(cw, ch, dpr);
        lx.font = sp.font; lx.fillStyle = sp.color; lx.textBaseline = 'alphabetic';
        const fsz = parseFloat(sp.font.match(/(\d+(?:\.\d+)?)px/)[1]);
        lx.fillText(sp.text, 4, ch / 2 + fsz * .33);
        const m = mkPlane(lc, -8); m.scale.set(cw * unit, ch * unit, 1);
        lns.push({ mesh: m, w: tw, h: sp.h, yRel: y, link: sp.link, shift: 0, op: { v: 1 } });
        y += sp.h;
      });
      const bh = y, bwid = Math.max(...lns.map(l => l.w));
      lns.forEach(l => { const top = side === 'top' ? bandY + bh - l.yRel : -bandY - l.yRel; l.restY = top - l.h / 2; });
      const order = lns.map((_, i) => i); if (side === 'top') order.reverse();
      blocks.push({ side, lines: lns, left: x, w: bwid, order });
      x += Math.max(.62 * bwid, phone ? 150 : 200) + (phone ? 60 : 90);
    });
    const last = blocks[blocks.length - 1];
    L = last.left + last.w + (phone ? 140 : 260) + W / 2;
    L = Math.max(L, W * 2.2);
  }

  /* ---------- ввод ---------- */
  const mouse = { x: 0, y: 0 };
  let hoveredLine = null;
  mount.addEventListener('wheel', e => {
    e.preventDefault(); noteInput();
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; trackTgt += d; hideHint();
  }, { passive: false });
  let tp = { on: false, x: 0, y: 0, sx: 0, sy: 0 };
  mount.addEventListener('pointerdown', e => { noteInput(); tp = { on: true, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: e.pointerType }; trackVel = 0; });
  mount.addEventListener('pointermove', e => {
    noteInput(); mouse.x = e.clientX; mouse.y = e.clientY; lastMX = e.clientX; lastMY = e.clientY;
    if (!(e.pointerType === 'touch') && !isTouch) { mouseMoved = true; if (!sleeping && !frozen) setTarget(e.clientX, e.clientY); }
    if (tp.on && e.pointerType === 'touch') {
      const dx = e.clientX - tp.x, dy = e.clientY - tp.y; tp.x = e.clientX; tp.y = e.clientY;
      const d = Math.abs(dx) > Math.abs(dy) ? -dx : -dy; trackTgt += d; trackVel = d; hideHint();
    }
  });
  mount.addEventListener('pointerup', e => {
    tp.on = false;
    if (Math.hypot(e.clientX - tp.sx, e.clientY - tp.sy) > 8) return;
    // клик по роботу
    if (botHit(e.clientX, e.clientY)) { clickBot(); return; }
    updateHover(e.clientX, e.clientY);
    if (hoveredLine && hoveredLine.link) {
      const lk = hoveredLine.link;
      if (lk.blank) window.open(lk.url, '_blank', 'noopener'); else location.hash = lk.url;
    }
  });
  mount.addEventListener('pointercancel', () => tp.on = false);
  ['keydown', 'touchstart'].forEach(ev => window.addEventListener(ev, () => { if (current === 'about') noteInput(); }, { passive: true }));
  let hintHidden = false;
  function hideHint() { if (hintHidden) return; hintHidden = true; gsap.to(hintEl, { opacity: 0, duration: .5 }); }

  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function botHit(cx, cy) {
    if (bu.uReveal.value < .05) return null;
    const r = mount.getBoundingClientRect();
    ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    const h = ray.intersectObjects(botMeshes, false);
    if (!h.length) return null; return h[0];
  }
  function updateHover(cx, cy) {
    const r = mount.getBoundingClientRect(); const mx = cx - r.left - W / 2, my = H / 2 - (cy - r.top);
    hoveredLine = null;
    for (const b of blocks) {
      const left = wrapL(b.left - trackOff);
      for (const l of b.lines) {
        if (!l.link) continue;
        if (mx >= left && mx <= left + l.w && Math.abs(my - (l.restY + l.shift)) <= l.h / 2 + 4) hoveredLine = l;
      }
    }
    const sh = !!subRect && mx >= subRect.x0 + wrapL(-trackOff) && mx <= subRect.x1 + wrapL(-trackOff) && Math.abs(my - subRect.yc) <= subRect.h / 2;
    if (sh !== subHover) { subHover = sh; gsap.to(subMask.material, { opacity: sh ? .5 : 0, duration: .55, ease: 'expo.out' }); }
  }

  /* ---------- размеры ---------- */
  function layout() {
    W = mount.clientWidth || innerWidth; H = mount.clientHeight || innerHeight; phone = W <= 640;
    renderer.setSize(W, H); bgRT.setSize(W * dpr, H * dpr);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    unit = (2 * 21 * Math.tan(22.5 * DEG)) / H;
    const k = W <= 1024 ? .85 : W <= 1440 ? .9 : 1;
    const targetH = 200 * k * (2 * 14 * Math.tan(22.5 * DEG)) / H;
    root.scale.setScalar(targetH / bsz.y);
    discMat.uniforms.uRes.value.set(W * dpr, H * dpr);
    buildText();
  }

  /* ---------- кадр ---------- */
  let last = performance.now(), simTime = 0;
  const hitV = new THREE.Vector3();
  function frame() {
    const now = performance.now(), dt = Math.min(.1, (now - last) / 1000); last = now; simTime += dt;
    bu.uTime.value = simTime;
    const ek = 1 - Math.pow(1 - .08, 60 * dt);
    // дорожка
    trackVel *= .95; if (!tp.on && Math.abs(trackVel) > .05) trackTgt += trackVel;
    trackOff += (trackTgt - trackOff) * .12;
    // сон
    if (!isTouch && !sleeping && bu.uReveal.value >= 1 && now - lastInput > 30000) goSleep();
    // бот
    if (!mouseMoved && !sleeping && !isTouch && !frozen) { st.tg.x = -.62; st.tg.y = .59; st.tg.z = .2; }
    if (isTouch && !mouseMoved && !sleeping) { st.tg.x = 0; st.tg.y = 0; st.tg.z = 0; }
    if (!frozen) { st.rot.x += (st.tg.x - st.rot.x) * ek; st.rot.y += (st.tg.y - st.rot.y) * ek; st.rot.z += (st.tg.z - st.rot.z) * ek; }
    st.phase += dt * 1.5 * st.speed;
    const fy = reduced ? 0 : Math.sin(st.phase) * .2 * st.amp * bu.uReveal.value;
    st.floatY += (fy - st.floatY) * ek;
    root.rotation.set(st.rot.x + st.hit.x, st.rot.y + st.shake + st.hit.y + st.spinY, st.rot.z + st.hit.z);
    root.position.y = st.floatY;
    const es = Math.max(.02, st.blink * st.sleepEye * st.hitEye);
    eyes.forEach(e => e.scale.y = es);
    halo.rotation.z += dt * .35;
    root.updateMatrixWorld(true);
    bu.uInvInner.value.copy(inner.matrixWorld).invert();
    // наведение на бота
    const hit = (!isTouch && running && mouse.x) ? botHit(mouse.x, mouse.y) : null;
    if (hit) { bu.uHit.value.copy(inner.worldToLocal(hitV.copy(hit.point))); hoverTarget = 1; } else hoverTarget = 0;
    bu.uHover.value += (hoverTarget - bu.uHover.value) * (hoverTarget ? .1 : .05);
    // текст
    updateText();
    updateHover(mouse.x || -999, mouse.y || -999);
    mount.style.cursor = (hit || (hoveredLine && hoveredLine.link)) ? 'pointer' : '';
    // диск
    if (disc.visible) {
      disc.scale.setScalar(Math.max(.001, fxScale));
      const pxPerWorld = (H * dpr) / (2 * 20.9 * Math.tan(22.5 * DEG));
      discMat.uniforms.uRadiusPx.value = fxScale * pxPerWorld;
      root.visible = false; disc.visible = false;
      renderer.setRenderTarget(bgRT); renderer.render(scene, camera); renderer.setRenderTarget(null);
      root.visible = true; disc.visible = true;
    }
    renderer.render(scene, camera);
  }
  function updateText() {
    const rxp = (phone ? .7875 : 1) * 3.4 / unit, ryp = (phone ? .7875 : 1) * 4.0543 / unit, pad = .35 / unit;
    headline.position.x = wrapL(-trackOff) * unit; headline.position.y = 0;
    subMask.position.set(((subRect.x0 + subRect.x1) / 2 + wrapL(-trackOff)) * unit, subRect.yc * unit, -7.98);
    subMask.scale.set((subRect.x1 - subRect.x0 + 8) * unit, subRect.h * unit, 1);
    blocks.forEach(b => {
      const left = wrapL(b.left - trackOff);
      const off = left > W / 2 + 60 || left + b.w < -W / 2 - 60;
      let prev = 0, k = 0;
      b.order.forEach(i => {
        const l = b.lines[i];
        if (off) { l.shift = 0; l.mesh.visible = false; return; }
        l.mesh.visible = true;
        const d = (left <= 0 && left + l.w >= 0) ? 0 : Math.min(Math.abs(left), Math.abs(left + l.w));
        let need = 0;
        if (d < rxp) {
          const h = ryp * Math.sqrt(1 - (d / rxp) ** 2) + pad;
          if (b.side === 'top') need = Math.max(0, h - (l.restY - l.h / 2));
          else need = Math.min(0, -h - (l.restY + l.h / 2));
        }
        need = b.side === 'top' ? Math.max(need, prev) : Math.min(need, prev);
        l.shift += (need - l.shift) * Math.max(.1, .14 - .012 * k);
        prev = l.shift; k++;
        l.mesh.position.set((left + l.w / 2) * unit, (l.restY + l.shift) * unit, -8);
        l.mesh.material.opacity = (l.link && l === hoveredLine) ? lerpOp(l, .5) : lerpOp(l, 1);
      });
    });
  }
  function lerpOp(l, t) { l.op.v += (t - l.op.v) * (1 - Math.pow(1 - .12, 60 / 60)) * .12 * 3; return l.op.v; }
  function loop() { if (!running) return; raf = requestAnimationFrame(loop); frame(); }

  return {
    el,
    async build() {
      if (built) return; built = true;
      mount.appendChild(renderer.domElement);
      layout(); scheduleBlink();
      window.addEventListener('resize', () => { if (built) layout(); });
    },
    enter() {
      running = true; last = performance.now(); lastInput = performance.now(); sleeping = false;
      st.sleepEye = 1; st.speed = 1; st.amp = 1;
      revealBot(); loop();
      if (!hintHidden) gsap.fromTo(hintEl, { opacity: 0, x: -8 }, { opacity: 1, x: 0, duration: .9, ease: 'expo.out', delay: 1.6 });
    },
    leave() { running = false; cancelAnimationFrame(raf); },
  };
}

/* ===================================================================
   СТАРТ
   =================================================================== */
(async function boot() {
  await loadFonts();
  views.gallery = createGallery();
  views.projects = createProjects();
  views.about = createAbout();
  route();
})();


/* ===================================================================
   КУРСОР-КОЛЬЦО на «Работах» (как в шаблоне Vell Lookbook):
   кольцо 46px догоняет мышь на 32% за кадр; при перетаскивании
   вытягивается в «таблетку» 84×34. Только для мыши.
   =================================================================== */
(function ringCursor() {
  if (isTouch) return;
  const view = document.getElementById('projects');
  const ring = document.createElement('div'); ring.className = 'ring-cursor'; document.body.appendChild(ring);
  let x = -100, y = -100, tx = -100, ty = -100, down = false, sx = 0, sy = 0, shown = false;
  const lbEl = document.getElementById('lb');
  const active = () => location.hash === '#projects' && getComputedStyle(lbEl).visibility !== 'visible';
  window.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    tx = e.clientX; ty = e.clientY;
    if (!shown) { x = tx; y = ty; }
    if (down && Math.hypot(tx - sx, ty - sy) > 4) ring.classList.add('drag');
  });
  view.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') { down = true; sx = e.clientX; sy = e.clientY; } });
  window.addEventListener('pointerup', () => { down = false; ring.classList.remove('drag'); });
  document.addEventListener('mouseleave', () => { shown = false; ring.style.opacity = 0; });
  (function tick() {
    const on = active() && tx > -50;
    if (on !== shown) { shown = on; ring.style.opacity = on ? 1 : 0; }
    x += (tx - x) * .32; y += (ty - y) * .32;
    ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  })();
})();
