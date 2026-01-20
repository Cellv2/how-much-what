import type { ARENA_SEASON } from "./season.data";

export type ArenaSeasonId = keyof typeof ARENA_SEASON;
export type ArenaSeason = (typeof ARENA_SEASON)[ArenaSeasonId];
export type ArenaSeasonName = ArenaSeason["name"];
