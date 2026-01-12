import type { NamedEntity } from "../types/common";

export const EXPANSION = {
    CLASSIC: { id: "CLASSIC", name: "Classic" },
    TBC: { id: "TBC", name: "TBC" },
    WOTLK: { id: "WOTLK", name: "Wrath" },
} as const satisfies Record<string, NamedEntity>;

export type ExpansionId = keyof typeof EXPANSION;
export type Expansion = (typeof EXPANSION)[ExpansionId];
