import { useEffect, useState } from "react";

const SCENES = [
  {
    cmd: "help",
    out: [
      "  open portfolio — site / stack / work",
      "  open termo     — word game (PT-BR)",
      "  open contact   — reach out",
    ],
  },
  {
    cmd: "open portfolio",
    out: ["→ loading portfolio shell…", "  ✓ ready — scroll & explore"],
  },
  {
    cmd: "open termo",
    out: ["→ launching TERMO…", "  ✓ guess the 5-letter word"],
  },
] as const;

const TYPE_MS = 34;
const PAUSE_AFTER_OUT_MS = 2400;

type BbsTerminalPreviewProps = {
  emphasis: "center" | "side";
};

export function BbsTerminalPreview({ emphasis }: BbsTerminalPreviewProps) {
  const [sceneIx, setSceneIx] = useState(0);
  const [typedLen, setTypedLen] = useState(0);
  const [showOut, setShowOut] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const scene = SCENES[sceneIx];
  const cmd = scene.cmd;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setTypedLen(cmd.length);
      setShowOut(true);
      const t = window.setTimeout(() => {
        setSceneIx((i) => (i + 1) % SCENES.length);
      }, PAUSE_AFTER_OUT_MS);
      return () => window.clearTimeout(t);
    }

    setTypedLen(0);
    setShowOut(false);
    let i = 0;
    let advanceTimer: ReturnType<typeof setTimeout> | undefined;
    const id = window.setInterval(() => {
      i += 1;
      if (i >= cmd.length) {
        window.clearInterval(id);
        setTypedLen(cmd.length);
        setShowOut(true);
        advanceTimer = window.setTimeout(() => {
          setSceneIx((x) => (x + 1) % SCENES.length);
        }, PAUSE_AFTER_OUT_MS);
        return;
      }
      setTypedLen(i);
    }, TYPE_MS);
    return () => {
      window.clearInterval(id);
      if (advanceTimer !== undefined) window.clearTimeout(advanceTimer);
    };
  }, [sceneIx, cmd, reduceMotion]);

  const isCenter = emphasis === "center";
  const shell = typedLen >= cmd.length && showOut;

  return (
    <div
      className="bbs-terminal-preview-root absolute inset-0 z-[1] flex origin-center flex-col bg-[#05080c] transition-transform duration-500 ease-out motion-safe:will-change-transform"
      aria-hidden
    >
      <div
        className={`pointer-events-none absolute inset-0 ${isCenter ? "opacity-[0.09]" : "opacity-[0.06]"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "100% 3px",
        }}
      />
      <div
        className={`relative flex min-h-0 flex-1 flex-col px-[7%] pb-[12%] pt-[8%] ${isCenter ? "sm:px-[8%] sm:pb-[11%] sm:pt-[9%]" : "px-[5%] pb-[10%] pt-[7%]"}`}
      >
        <div
          className={`mb-2 flex shrink-0 items-center gap-2 border-b border-white/[0.1] pb-2 ${isCenter ? "mb-2.5" : "mb-1.5 pb-1.5"}`}
        >
          <span className={`flex gap-1 ${isCenter ? "" : "scale-90"}`}>
            <span
              className={`rounded-full bg-[#ff5f57]/90 ${isCenter ? "h-2 w-2" : "h-1.5 w-1.5"}`}
            />
            <span
              className={`rounded-full bg-[#febc2e]/90 ${isCenter ? "h-2 w-2" : "h-1.5 w-1.5"}`}
            />
            <span
              className={`rounded-full bg-[#28c840]/90 ${isCenter ? "h-2 w-2" : "h-1.5 w-1.5"}`}
            />
          </span>
          <span
            className={`font-[family-name:var(--font-terminal)] text-[0.55em] font-medium tracking-[0.14em] text-neutral-500/95 sm:text-[0.58em] ${isCenter ? "sm:text-[0.62em]" : ""}`}
          >
            bbs — tty1
          </span>
        </div>

        <div
          className={`min-h-0 flex-1 overflow-hidden font-[family-name:var(--font-terminal)] leading-snug ${isCenter ? "text-[clamp(0.68rem,2.35vw,0.92rem)] sm:text-[clamp(0.72rem,2.05vw,0.95rem)]" : "text-[clamp(0.5rem,1.45vw,0.62rem)] sm:text-[clamp(0.54rem,1.3vw,0.68rem)]"}`}
        >
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-1 break-words">
              <span className="shrink-0 font-semibold text-emerald-400/95">
                guest@bbs
              </span>
              <span className="shrink-0 text-neutral-500">:~$</span>
              <span className="min-w-0 font-semibold text-white [text-shadow:0_0_20px_rgba(255,255,255,0.12)]">
                {cmd.slice(0, typedLen)}
              </span>
              {shell ? null : (
                <span
                  className="cursor-blink inline-block h-[1em] w-[0.45em] translate-y-[0.08em] bg-emerald-400/90"
                  aria-hidden
                />
              )}
            </div>

            {shell ? (
              <div className="flex flex-col gap-0.5 border-l-2 border-emerald-500/35 pl-2.5 sm:pl-3">
                {scene.out.map((line, i) => (
                  <p
                    key={`${sceneIx}-${i}`}
                    className={`font-medium tracking-tight text-neutral-100/92 ${line.startsWith("→") ? "text-emerald-100/95" : "text-neutral-200/90"}`}
                    style={{
                      animation: reduceMotion
                        ? undefined
                        : "bbsTermFade 420ms ease-out both",
                      animationDelay: reduceMotion ? undefined : `${i * 70}ms`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bbsTermFade {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
