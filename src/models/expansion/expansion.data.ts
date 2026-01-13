import type { NamedEntity } from "../../types/common";
import type { ExpansionId } from "./expansion.types";

export const EXPANSION = {
    CLASSIC: { id: "CLASSIC", name: "Classic" },
    TBC: { id: "TBC", name: "TBC" },
    WOTLK: { id: "WOTLK", name: "Wrath" },
} as const satisfies Record<string, NamedEntity>;

export const DEFAULT_EXPANSION: ExpansionId = EXPANSION.TBC.id;
