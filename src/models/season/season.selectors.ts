import type { ExpansionId } from "../expansion";
import { ARENA_SEASON } from "./season.data";
import type { ArenaSeasonId, ArenaSeasonName } from "./season.types";

export const getSeasonsForExpansion = (expansion: ExpansionId) => {
    return Object.values(ARENA_SEASON).filter(
        (season) => season.expansion === expansion
    );
};

export const getSeasonIdsForExpansion = (
    expansion: ExpansionId
): ArenaSeasonId[] => getSeasonsForExpansion(expansion).map((s) => s.id);

export const getSeasonNamesForExpansion = (
    expansion: ExpansionId
): ArenaSeasonName[] => getSeasonsForExpansion(expansion).map((s) => s.name);
