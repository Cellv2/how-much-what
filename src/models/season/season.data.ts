import type { NamedEntity } from "../../types/common";
import type { ExpansionId } from "../expansion";
import type { ArenaSeasonId } from "./season.types";

export const ARENA_SEASON = {
    SEASON_1: { id: "SEASON_1", name: "S1", expansion: "TBC" },
    SEASON_2: { id: "SEASON_2", name: "S2", expansion: "TBC" },
    SEASON_3: { id: "SEASON_3", name: "S3", expansion: "TBC" },
    SEASON_4: { id: "SEASON_4", name: "S4", expansion: "TBC" },
    SEASON_5: { id: "SEASON_5", name: "S5", expansion: "WOTLK" },
    SEASON_6: { id: "SEASON_6", name: "S6", expansion: "WOTLK" },
    SEASON_7: { id: "SEASON_7", name: "S7", expansion: "WOTLK" },
    SEASON_8: { id: "SEASON_8", name: "S8", expansion: "WOTLK" },
} as const satisfies Record<string, NamedEntity & { expansion: ExpansionId }>;

export const DEFAULT_SEASON: ArenaSeasonId = ARENA_SEASON.SEASON_1.id;
