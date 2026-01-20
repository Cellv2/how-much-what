import { describe, expect, it } from "vitest";
import { getGearSlotIds, getGearSlotNames } from "./gear-slot.selectors";

describe("getGearSlotIds", () => {
    it("should return the correct slot ids in the correct order", () => {
        const expected = [
            "HELM",
            "SHOULDER",
            "NECK",
            "BACK",
            "CHEST",
            "WRIST",
            "GLOVES",
            "BELT",
            "LEGS",
            "FEET",
            "RING_1",
            "RING_2",
            "TRINKET_1",
            "TRINKET_2",
            "WEAPON",
            "OFFHAND",
            "RANGED",
        ];

        const actual = getGearSlotIds();

        expect(actual).toMatchObject(expected);
    });
});

describe("getGearSlotNames", () => {
    it("should return the correct slot names in the correct order", () => {
        const expected = [
            "Helm",
            "Shoulder",
            "Neck",
            "Back",
            "Chest",
            "Bracers",
            "Gloves",
            "Belt",
            "Legs",
            "Boots",
            "Ring 1",
            "Ring 2",
            "Trinket 1",
            "Trinket 2",
            "Weapon",
            "Offhand",
            "Ranged / Relic",
        ];

        const result = getGearSlotNames();

        expect(result).toMatchObject(expected);
    });
});
