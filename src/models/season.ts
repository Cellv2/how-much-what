import type { NamedEntity } from "../types/common";
import type { ExpansionId } from "./expansion";

export const ARENA_SEASONS = {
    SEASON_1: { id: "SEASON_1", name: "S1", expansion: "TBC" },
    SEASON_2: { id: "SEASON_2", name: "S2", expansion: "TBC" },
    SEASON_3: { id: "SEASON_3", name: "S3", expansion: "TBC" },
    SEASON_4: { id: "SEASON_4", name: "S4", expansion: "TBC" },
    SEASON_5: { id: "SEASON_5", name: "S5", expansion: "WOTLK" },
    SEASON_6: { id: "SEASON_6", name: "S6", expansion: "WOTLK" },
    SEASON_7: { id: "SEASON_7", name: "S7", expansion: "WOTLK" },
    SEASON_8: { id: "SEASON_8", name: "S8", expansion: "WOTLK" },
} as const satisfies Record<string, NamedEntity & { expansion: ExpansionId }>;

export type ArenaSeasonId = keyof typeof ARENA_SEASONS;
export type ArenaSeason = (typeof ARENA_SEASONS)[ArenaSeasonId];
