import {
  lazy,
  Suspense,
  useSyncExternalStore,
} from "react";
import { assetUrl } from "../assetUrl";

/** Alinhado ao breakpoint `lg` do layout da hero (Tailwind). */
const HERO_3D_MEDIA = "(min-width: 1024px)";

function subscribeToHero3dMedia(callback: () => void) {
  const mq = window.matchMedia(HERO_3D_MEDIA);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getHero3dSnapshot() {
  return window.matchMedia(HERO_3D_MEDIA).matches;
}

function getHero3dServerSnapshot() {
  return false;
}

function useHeroDesktop3dEnabled() {
  return useSyncExternalStore(
    subscribeToHero3dMedia,
    getHero3dSnapshot,
    getHero3dServerSnapshot,
  );
}

const Portfolio3DLazy = lazy(() =>
  import("./Portfolio3D").then((m) => ({ default: m.Portfolio3D })),
);

/** Fallback estático enquanto o chunk 3D carrega no desktop (Suspense). */
function PortfolioHeroFallback() {
  return (
    <div
      className="wes-portfolio-3d-shell wes-portfolio-3d-fallback"
      aria-hidden
    >
      <div
        id="portfolio-3d-fallback"
        className="portfolio-3d-fallback-mount"
        style={{ background: "transparent" }}
      >
        <img
          src={assetUrl("/hero/portfolio-hero-3d-fallback.jpg")}
          alt=""
          width={520}
          height={520}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          className="portfolio-3d-fallback-img"
        />
      </div>
    </div>
  );
}

/**
 * Desktop (viewport ≥1024px): monta o viewer WebGL via import dinâmico.
 * Mobile: não monta Three.js nem carrega o chunk — hero tipográfica, sem imagem de fallback.
 */
export function HeroPortfolioVisual() {
  const desktop3d = useHeroDesktop3dEnabled();

  if (!desktop3d) {
    return null;
  }

  return (
    <>
      <div className="hero-interact">
        <span>Interaja aqui ↓</span>
      </div>
      <Suspense fallback={<PortfolioHeroFallback />}>
        <Portfolio3DLazy />
      </Suspense>
    </>
  );
}
