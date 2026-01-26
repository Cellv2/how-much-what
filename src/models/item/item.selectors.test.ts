import { describe, expect, it, vi } from "vitest";
import type { ArenaSeasonId } from "../season";
import { ITEMS } from "./item.data";
import { getItemsForArenaSeasonId } from "./item.selectors";

describe("getItemsForArenaSeasonId", () => {
    it("does not mutate the ITEM data", () => {
        const seasonToTest: ArenaSeasonId = "SEASON_1";
        const before = Object.values(ITEMS)
            .filter((item) => item.seasonId === seasonToTest)
            .map((item) => ({ ...item }));

        getItemsForArenaSeasonId(seasonToTest);

        const after = Object.values(ITEMS)
            .filter((item) => item.seasonId === seasonToTest)
            .map((item) => ({ ...item }));

        expect(after).toEqual(before);
    });

    it("returns an empty array if no items exist for season", () => {
        vi.mock("./item.data.ts", () => {
            return {
                ITEMS: {},
            };
        });

        const result = getItemsForArenaSeasonId("SEASON_1");

        expect(result).toEqual([]);
    });
});
