import { describe, expect, it } from "vitest";
import { getGearSlotNames } from "./gear-slot.selectors";

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

        expect(result).toEqual(expected);
    });
});
