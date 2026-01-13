import type { EXPANSION } from "./expansion.data";

export type ExpansionId = keyof typeof EXPANSION;
export type Expansion = (typeof EXPANSION)[ExpansionId];
