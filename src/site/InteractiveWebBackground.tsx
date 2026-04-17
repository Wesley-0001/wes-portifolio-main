import { useEffect, useRef } from "react";
import type { PortfolioMeshTheme } from "./portfolioMeshTheme";

type Particle = {
  nx: number;
  ny: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  spawned: boolean;
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const HERO_VISUAL_SELECTOR = "[data-wes-hero-visual]";

function isPointerOverHeroVisual(clientX: number, clientY: number): boolean {
  const el = document.elementFromPoint(clientX, clientY);
  if (!(el instanceof Element)) return false;
  return el.closest(HERO_VISUAL_SELECTOR) !== null;
}

function shouldIgnoreInteractionTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      `a,button,input,textarea,select,label,[role='button'],[contenteditable='true'],canvas,${HERO_VISUAL_SELECTOR}`,
    ),
  );
}

type MeshPhysics = {
  areaDivNarrow: number;
  areaDivWide: number;
  capNarrowMin: number;
  capNarrowMax: number;
  capWideMin: number;
  capWideMax: number;
  maxParticlesNarrow: number;
  maxParticlesWide: number;
  spawnNarrow: number;
  spawnWide: number;
  kSpring: number;
  damping: number;
  repulse: number;
  linkDistMul: number;
  lineAlphaMin: number;
  lineAlphaRange: number;
  lineAlphaStaticMin: number;
  lineAlphaStaticRange: number;
};

function physicsForTheme(theme: PortfolioMeshTheme): MeshPhysics {
  if (theme === "ember") {
    return {
      areaDivNarrow: 38000,
      areaDivWide: 25500,
      capNarrowMin: 28,
      capNarrowMax: 42,
      capWideMin: 44,
      capWideMax: 64,
      maxParticlesNarrow: 102,
      maxParticlesWide: 148,
      spawnNarrow: 3,
      spawnWide: 5,
      kSpring: 0.0172,
      damping: 0.905,
      repulse: 0.93,
      linkDistMul: 0.9,
      lineAlphaMin: 0.022,
      lineAlphaRange: 0.068,
      lineAlphaStaticMin: 0.022,
      lineAlphaStaticRange: 0.065,
    };
  }
  return {
    areaDivNarrow: 52000,
    areaDivWide: 38000,
    capNarrowMin: 22,
    capNarrowMax: 34,
    capWideMin: 34,
    capWideMax: 52,
    maxParticlesNarrow: 88,
    maxParticlesWide: 128,
    spawnNarrow: 2,
    spawnWide: 4,
    kSpring: 0.011,
    damping: 0.935,
    repulse: 0.92,
    linkDistMul: 1,
    lineAlphaMin: 0.026,
    lineAlphaRange: 0.062,
    lineAlphaStaticMin: 0.026,
    lineAlphaStaticRange: 0.06,
  };
}

function lineColor(theme: PortfolioMeshTheme, alpha: number): string {
  switch (theme) {
    case "spectrum":
      return `rgba(200, 230, 235, ${alpha})`;
    case "ember":
      return `rgba(212, 86, 76, ${alpha})`;
    default:
      return `rgba(255, 255, 255, ${alpha})`;
  }
}

function dotColor(theme: PortfolioMeshTheme, alpha: number): string {
  switch (theme) {
    case "spectrum":
      return `rgba(215, 235, 240, ${alpha})`;
    case "ember":
      return `rgba(242, 154, 138, ${alpha})`;
    default:
      return `rgba(255, 255, 255, ${alpha})`;
  }
}

type Props = {
  /** Tema visual da malha (rede neutra, spectrum frio, ember intenso). */
  meshTheme?: PortfolioMeshTheme;
  className?: string;
};

/**
 * Teia digital em canvas: nós + arestas por proximidade, mola para posição de repouso,
 * repulsão suave ao cursor e novos nós ao clicar (sem capturar pointer: listeners no window).
 */
export function InteractiveWebBackground({
  meshTheme = "network",
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = mq.matches;

    const phys = physicsForTheme(meshTheme);

    const particles: Particle[] = [];
    let w = window.innerWidth;
    let h = window.innerHeight;

    const mouse = { x: 0, y: 0, active: false };

    const isNarrow = () => w < 768;
    const maxParticles = () =>
      isNarrow() ? phys.maxParticlesNarrow : phys.maxParticlesWide;
    const spawnPerClick = () =>
      isNarrow() ? phys.spawnNarrow : phys.spawnWide;

    function seed() {
      particles.length = 0;
      const rnd = mulberry32(21611);
      const area = w * h;
      const cap = isNarrow()
        ? Math.min(
            phys.capNarrowMax,
            Math.max(phys.capNarrowMin, Math.floor(area / phys.areaDivNarrow)),
          )
        : Math.min(
            phys.capWideMax,
            Math.max(phys.capWideMin, Math.floor(area / phys.areaDivWide)),
          );
      const count = cap;
      for (let i = 0; i < count; i++) {
        const nx = rnd();
        const ny = rnd();
        const x = nx * w;
        const y = ny * h;
        particles.push({
          nx,
          ny,
          x,
          y,
          vx: 0,
          vy: 0,
          spawned: false,
        });
      }
    }

    function syncAnchorsFromNorm() {
      for (const p of particles) {
        p.x = p.nx * w;
        p.y = p.ny * h;
        p.vx = 0;
        p.vy = 0;
      }
    }

    function trimParticles() {
      const cap = maxParticles();
      while (particles.length > cap) {
        const i = particles.findIndex((p) => p.spawned);
        if (i === -1) break;
        particles.splice(i, 1);
      }
    }

    function spawnAt(clientX: number, clientY: number) {
      if (reducedMotion) return;
      const rnd = mulberry32((Date.now() ^ (clientX * 997)) >>> 0);
      const spread = Math.min(42, Math.min(w, h) * 0.045);
      for (let n = 0; n < spawnPerClick(); n++) {
        const ang = rnd() * Math.PI * 2;
        const r = rnd() * spread;
        let nx = (clientX + Math.cos(ang) * r) / w;
        let ny = (clientY + Math.sin(ang) * r) / h;
        nx = Math.min(0.998, Math.max(0.002, nx));
        ny = Math.min(0.998, Math.max(0.002, ny));
        particles.push({
          nx,
          ny,
          x: nx * w,
          y: ny * h,
          vx: (rnd() - 0.5) * 0.42,
          vy: (rnd() - 0.5) * 0.42,
          spawned: true,
        });
      }
      trimParticles();
    }

    function metrics() {
      const m = Math.min(w, h);
      const raw = Math.min(185, Math.max(118, m * 0.21)) * phys.linkDistMul;
      const linkDist = Math.min(190, Math.max(96, raw));
      const repulseR = Math.min(168, Math.max(96, m * 0.14));
      return {
        linkDist,
        linkDistSq: linkDist * linkDist,
        repulseR,
        repulseRSq: repulseR * repulseR,
      };
    }

    function step() {
      const { repulseR, repulseRSq } = metrics();
      const K_SPRING = phys.kSpring;
      const DAMPING = phys.damping;
      const REPULSE = phys.repulse;

      for (const p of particles) {
        p.nx = Math.min(0.999, Math.max(0.001, p.nx));
        p.ny = Math.min(0.999, Math.max(0.001, p.ny));
        const ax = p.nx * w;
        const ay = p.ny * h;

        let fx = (ax - p.x) * K_SPRING;
        let fy = (ay - p.y) * K_SPRING;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > 4 && d2 < repulseRSq) {
            const d = Math.sqrt(d2);
            const t = REPULSE * (1 - d / repulseR);
            const inv = t / d;
            fx += dx * inv;
            fy += dy * inv;
          }
        }

        p.vx = (p.vx + fx) * DAMPING;
        p.vy = (p.vy + fy) * DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        const margin = 8;
        if (p.x < margin) p.x = margin;
        if (p.y < margin) p.y = margin;
        if (p.x > w - margin) p.x = w - margin;
        if (p.y > h - margin) p.y = h - margin;
      }
    }

    function draw() {
      const { linkDist, linkDistSq } = metrics();
      ctx.clearRect(0, 0, w, h);
      const n = particles.length;
      ctx.lineWidth = meshTheme === "ember" ? 0.5 : 0.55;
      ctx.lineCap = "round";

      const a0 = phys.lineAlphaMin;
      const ar = phys.lineAlphaRange;

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > linkDistSq) continue;
          const d = Math.sqrt(d2);
          const t = 1 - d / linkDist;
          const alpha = a0 + t * ar;
          ctx.strokeStyle = lineColor(meshTheme, alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      const dotBase = meshTheme === "ember" ? 0.2 : 0.19;
      const dotBoost = meshTheme === "ember" ? 0.06 : 0.055;
      const rSpawn = meshTheme === "ember" ? 1.28 : 1.25;
      const rBase = meshTheme === "ember" ? 1.08 : 1.05;

      for (const p of particles) {
        const alpha = dotBase + (p.spawned ? dotBoost : 0);
        ctx.fillStyle = dotColor(meshTheme, alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.spawned ? rSpawn : rBase, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawStaticMesh() {
      const { linkDist, linkDistSq } = metrics();
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = meshTheme === "ember" ? 0.5 : 0.55;
      const a0 = phys.lineAlphaStaticMin;
      const ar = phys.lineAlphaStaticRange;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > linkDistSq) continue;
          const d = Math.sqrt(d2);
          const t = 1 - d / linkDist;
          const alpha = a0 + t * ar;
          ctx.strokeStyle = lineColor(meshTheme, alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      for (const p of particles) {
        ctx.fillStyle = dotColor(meshTheme, 0.32);
        ctx.beginPath();
        ctx.arc(p.x, p.y, meshTheme === "ember" ? 1.08 : 1.05, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let raf = 0;
    const loop = () => {
      if (reducedMotion) return;
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      const dprCap = isNarrow() ? 1.25 : 2;
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      syncAnchorsFromNorm();
      trimParticles();
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (document.visibilityState === "hidden" || reducedMotion) return;
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isPointerOverHeroVisual(e.clientX, e.clientY)) {
        mouse.active = false;
        return;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      if (shouldIgnoreInteractionTarget(e.target)) return;
      spawnAt(e.clientX, e.clientY);
    };

    const onMq = () => {
      reducedMotion = mq.matches;
      cancelAnimationFrame(raf);
      if (reducedMotion) {
        syncAnchorsFromNorm();
        drawStaticMesh();
      } else {
        raf = requestAnimationFrame(loop);
      }
    };

    seed();
    resize();

    if (reducedMotion) {
      drawStaticMesh();
    } else {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    mq.addEventListener("change", onMq);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      mq.removeEventListener("change", onMq);
    };
  }, [meshTheme]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}
