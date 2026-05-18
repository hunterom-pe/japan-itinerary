import type { ThemeId } from "./itinerary";

export type ThemeDef = {
  label: string;
  accent: string;
  accentSoft: string;
  ink: string;
  paper: string;
  glow?: string;
  pattern: "seigaiha" | "asanoha" | "kikko" | "shippo" | "ink" | "none";
};

export const themes: Record<ThemeId, ThemeDef> = {
  "neon-tokyo": {
    label: "Kabukicho neon",
    accent: "#ff2e88",
    accentSoft: "#3a0f29",
    ink: "#f7d6e6",
    paper: "#0e0612",
    glow: "0 0 24px rgba(255,46,136,0.45)",
    pattern: "asanoha",
  },
  "mecha-noir": {
    label: "Mecha noir",
    accent: "#5bd6ff",
    accentSoft: "#10222e",
    ink: "#dbe7ef",
    paper: "#0b121a",
    glow: "0 0 20px rgba(91,214,255,0.4)",
    pattern: "kikko",
  },
  "ghibli-whimsy": {
    label: "Whimsy cream",
    accent: "#6fa86b",
    accentSoft: "#e9f0d6",
    ink: "#2c3322",
    paper: "#faf6ea",
    pattern: "asanoha",
  },
  "alpine-wood": {
    label: "Alpine wood",
    accent: "#7a5230",
    accentSoft: "#efe2cd",
    ink: "#2c1f12",
    paper: "#f6eeda",
    pattern: "shippo",
  },
  "thatch-mountain": {
    label: "Thatched roof",
    accent: "#9b6a3a",
    accentSoft: "#ece1cb",
    ink: "#322415",
    paper: "#f4ecd8",
    pattern: "shippo",
  },
  "crimson-shrine": {
    label: "Vermillion torii at night",
    accent: "#e63946",
    accentSoft: "#3a0d0d",
    ink: "#f3e2c4",
    paper: "#160707",
    glow: "0 0 22px rgba(230,57,70,0.45)",
    pattern: "seigaiha",
  },
  "moss-stone": {
    label: "Moss & stone",
    accent: "#5f7a3b",
    accentSoft: "#dfe7cd",
    ink: "#23301a",
    paper: "#eef0e1",
    pattern: "asanoha",
  },
  "ink-cedar": {
    label: "Ink & cedar",
    accent: "#9aa3a1",
    accentSoft: "#1e2422",
    ink: "#d6d6cf",
    paper: "#13181a",
    pattern: "ink",
  },
  "dotonbori-glow": {
    label: "Dotonbori glow",
    accent: "#ffb347",
    accentSoft: "#3a1f0a",
    ink: "#fff4e0",
    paper: "#160c06",
    glow: "0 0 22px rgba(255,179,71,0.45)",
    pattern: "kikko",
  },
  "crt-retro": {
    label: "CRT retro",
    accent: "#7af0a7",
    accentSoft: "#0f2418",
    ink: "#d9ffe6",
    paper: "#0a120d",
    glow: "0 0 18px rgba(122,240,167,0.4)",
    pattern: "kikko",
  },
  "peace-white": {
    label: "Peace white",
    accent: "#2f6dac",
    accentSoft: "#e1ecf6",
    ink: "#1e2a36",
    paper: "#f8f7f3",
    pattern: "seigaiha",
  },
  "vermillion-tide": {
    label: "Vermillion tide",
    accent: "#c0392b",
    accentSoft: "#f7d6cf",
    ink: "#2a0f0a",
    paper: "#f5ecdc",
    pattern: "seigaiha",
  },
  "muted-gold": {
    label: "Muted gold",
    accent: "#a8854d",
    accentSoft: "#ece0c3",
    ink: "#2b2317",
    paper: "#f4ecd9",
    pattern: "shippo",
  },
  "quiet-grey": {
    label: "Quiet grey",
    accent: "#8a8a8a",
    accentSoft: "#dedede",
    ink: "#272727",
    paper: "#f0eee9",
    pattern: "ink",
  },
};
