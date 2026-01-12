import {
    ARENA_SEASON,
    getSeasonIdsForExpansion,
    getSeasonNamesForExpansion,
    getSeasonsForExpansion,
} from "./index";
import { describe, expect, it } from "vitest";

describe("getSeasonsForExpansion", () => {
    it("returns full season objects for TBC", () => {
        const seasons = getSeasonsForExpansion("TBC");
        expect(seasons).toHaveLength(4);
        expect(seasons[0]).toMatchObject({ id: "SEASON_1", name: "S1" });
    });
});

describe("getSeasonIdsForExpansion", () => {
    it("does not mutate the ARENA_SEASON data", () => {
        const before = Object.values(ARENA_SEASON).map((s) => ({ ...s }));

        getSeasonIdsForExpansion("TBC");

        const after = Object.values(ARENA_SEASON).map((s) => ({ ...s }));
        expect(after).toEqual(before);
    });

    it("preserves the order of seasons as defined in ARENA_SEASON", () => {
        const ids = getSeasonIdsForExpansion("TBC");

        expect(ids).toEqual(["SEASON_1", "SEASON_2", "SEASON_3", "SEASON_4"]);
    });

    it("returns an empty array for expansions with no seasons", () => {
        const result = getSeasonIdsForExpansion("CLASSIC");

        expect(result).toEqual([]);
    });

    it("returns all TBC seasons", () => {
        const result = getSeasonIdsForExpansion("TBC");

        expect(result).toEqual([
            "SEASON_1",
            "SEASON_2",
            "SEASON_3",
            "SEASON_4",
        ]);
    });

    it("returns all wrath seasons", () => {
        const result = getSeasonIdsForExpansion("WOTLK");

        expect(result).toEqual([
            "SEASON_5",
            "SEASON_6",
            "SEASON_7",
            "SEASON_8",
        ]);
    });
});

describe("getSeasonNamesForExpansion", () => {
    it("returns an empty array for expansions with no seasons", () => {
        const result = getSeasonNamesForExpansion("CLASSIC");
        expect(result).toEqual([]);
    });

    it("returns the correct season names for TBC", () => {
        const result = getSeasonNamesForExpansion("TBC");

        expect(result).toEqual(["S1", "S2", "S3", "S4"]);
    });

    it("returns the correct season names for WOTLK", () => {
        const result = getSeasonNamesForExpansion("WOTLK");

        expect(result).toEqual(["S5", "S6", "S7", "S8"]);
    });
});
