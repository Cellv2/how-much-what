import type { ExpansionId } from "../expansion";
import { ARENA_SEASON } from "./season.data";

export const getSeasonsForExpansion = (expansion: ExpansionId) => {
    return Object.values(ARENA_SEASON).filter(
        (season) => season.expansion === expansion
    );
};

export const getSeasonIdsForExpansion = (expansion: ExpansionId) =>
    getSeasonsForExpansion(expansion).map((s) => s.id);

export const getSeasonNamesForExpansion = (expansion: ExpansionId) =>
    getSeasonsForExpansion(expansion).map((s) => s.name);
