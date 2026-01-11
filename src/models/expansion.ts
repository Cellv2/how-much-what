import type { NamedEntity } from "../types/common";

export const EXPANSION = {
    CLASSIC: { id: "CLASSIC", name: "Classic" },
    TBC: { id: "TBC", name: "The Burning Crusade" },
    WOTLK: { id: "WOTLK", name: "Wrath of the Lich King" },
} as const satisfies Record<string, NamedEntity>;

export type ExpansionId = keyof typeof EXPANSION;
export type Expansion = (typeof EXPANSION)[ExpansionId];
