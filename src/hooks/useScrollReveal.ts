import { type RefObject, useEffect } from "react";

/**
 * Uma vez por elemento: observa `.is-reveal` dentro de `rootRef` e adiciona
 * `.is-revealed` quando o nó cruza o viewport. Sem listeners de scroll.
 * Com `reducedMotion`, marca tudo como revelado no mount.
 */
export function useScrollReveal(
  rootRef: RefObject<HTMLElement | null>,
  reducedMotion: boolean
): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll<HTMLElement>(".is-reveal");

    if (reducedMotion) {
      nodes.forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0,
        /** Dispara um pouco antes do bloco entrar por baixo — ritmo editorial */
        rootMargin: "0px 0px 12% 0px",
      }
    );

    nodes.forEach((el) => {
      io.observe(el);
    });

    return () => {
      io.disconnect();
    };
  }, [rootRef, reducedMotion]);
}
