/**
 * Temas visuais da malha (teia) do portfólio — atmosféricos/editoriais, independentes do jogo TERMO.
 *
 * - `network`: baseline neutra (rede clássica)
 * - `spectrum`: tom mais frio / acentos suaves (ex‑“alternate”)
 * - `ember`: intenso, vermelho profundo, malha mais densa e animação mais viva (inspirado na tensão visual HARD, adaptado ao site)
 */
export type PortfolioMeshTheme = "network" | "spectrum" | "ember";

export const PORTFOLIO_MESH_THEMES: readonly PortfolioMeshTheme[] = [
  "network",
  "spectrum",
  "ember",
] as const;

export function nextPortfolioMeshTheme(
  current: PortfolioMeshTheme,
): PortfolioMeshTheme {
  const i = PORTFOLIO_MESH_THEMES.indexOf(current);
  return PORTFOLIO_MESH_THEMES[(i + 1) % PORTFOLIO_MESH_THEMES.length]!;
}

export function portfolioMeshThemeLabel(t: PortfolioMeshTheme): string {
  switch (t) {
    case "network":
      return "Rede";
    case "spectrum":
      return "Spectrum";
    case "ember":
      return "Ember";
  }
}
