// Lightweight canvas charts without external deps
// Line + Bar + Doughnut mini renderer for dashboard

function createCanvas(parent, height = 220) {
  const c = document.createElement('canvas');
  c.width = parent.clientWidth * devicePixelRatio;
  c.height = height * devicePixelRatio;
  c.style.width = parent.clientWidth + 'px';
  c.style.height = height + 'px';
  parent.innerHTML = '';
  parent.appendChild(c);
  const ctx = c.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);
  return ctx;
}

function drawAxes(ctx, w, h, pad = 30) {
  ctx.strokeStyle = 'rgba(255,255,255,.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, h - pad);
  ctx.lineTo(w - pad, h - pad);
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, h - pad);
  ctx.stroke();
}

function lineChart(el, data, color = '#7c5cff') {
  const h = 220; const ctx = createCanvas(el, h); const w = el.clientWidth;
  drawAxes(ctx, w, h);
  const max = Math.max(...data) * 1.15; const min = 0;
  const pad = 30; const stepX = (w - pad * 2) / (data.length - 1);
  ctx.strokeStyle = color; ctx.lineWidth = 2.2;
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (v - min) / (max - min) * (h - pad * 2);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  // gradient fill
  const grad = ctx.createLinearGradient(0, pad, 0, h - pad);
  grad.addColorStop(0, 'rgba(124,92,255,.35)');
  grad.addColorStop(1, 'rgba(124,92,255,0)');
  ctx.fillStyle = grad; ctx.lineTo(w - pad, h - pad); ctx.lineTo(pad, h - pad); ctx.closePath(); ctx.fill();
}

function barChart(el, data, color = '#00e7f2') {
  const h = 220; const ctx = createCanvas(el, h); const w = el.clientWidth;
  drawAxes(ctx, w, h);
  const max = Math.max(...data) * 1.2; const pad = 30;
  const barW = (w - pad * 2) / data.length * 0.6; const gap = (w - pad * 2) / data.length * 0.4;
  ctx.fillStyle = color;
  data.forEach((v, i) => {
    const x = pad + i * (barW + gap) + gap * .2;
    const y = h - pad - (v / max) * (h - pad * 2);
    const height = (v / max) * (h - pad * 2);
    ctx.fillRect(x, y, barW, height);
  });
}

function doughnutChart(el, segments) {
  const size = 220; const ctx = createCanvas(el, size); const w = el.clientWidth; const h = size;
  const cx = w / 2; const cy = h / 2; const r = Math.min(w, h) / 2 - 20; const inner = r * 0.6;
  const total = segments.reduce((a, s) => a + s.value, 0);
  let start = -Math.PI / 2;
  segments.forEach(s => {
    const angle = (s.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, start, start + angle);
    ctx.arc(cx, cy, inner, start + angle, start, true);
    ctx.closePath();
    ctx.fillStyle = s.color; ctx.fill();
    start += angle;
  });
}

function animateCounter(el, to, ms = 1200) {
  const from = 0; const start = performance.now();
  function frame(t) {
    const p = Math.min(1, (t - start) / ms);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = val.toLocaleString();
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// Initialize on dashboard page
window.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('#dashboard-root')) return;
  const line = document.querySelector('#chart-line');
  const bar = document.querySelector('#chart-bar');
  const donut = document.querySelector('#chart-donut');
  lineChart(line, [4,8,6,10,14,13,18,21,19,26,28,32]);
  barChart(bar, [6,9,5,12,10,14,17,15]);
  doughnutChart(donut, [
    { value: 42, color: '#7c5cff' },
    { value: 28, color: '#00e7f2' },
    { value: 18, color: '#19d3a2' },
    { value: 12, color: '#ff8bb3' }
  ]);
  document.querySelectorAll('[data-counter]')
    .forEach(el => animateCounter(el, Number(el.getAttribute('data-counter')) || 0));
});

