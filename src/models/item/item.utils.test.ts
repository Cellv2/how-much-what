import { describe, expect, it } from "vitest";
import type { GearSlotId } from "../gearSlot";
import type { ItemEntity } from "./item.types";
import { groupItemsBySlot } from "./item.utils";

describe("groupItemsBySlot", () => {
    it("groups items by their slotId", () => {
        const items = [
            {
                id: "A",
                name: "Helm A",
                slotId: "HELM",
                currency: { id: "HONOR", amount: 100 },
                seasonId: "SEASON_1",
            },
            {
                id: "B",
                name: "Helm B",
                slotId: "HELM",
                currency: { id: "HONOR", amount: 200 },
                seasonId: "SEASON_1",
            },
            {
                id: "C",
                name: "Offhand C",
                slotId: "OFFHAND",
                currency: { id: "ARENA", amount: 300 },
                seasonId: "SEASON_2",
            },
        ] satisfies ItemEntity[];

        const result = groupItemsBySlot(items);

        expect(result.HELM).toHaveLength(2);
        expect(result.OFFHAND).toHaveLength(1);
    });

    it("returns an empty record when given no items", () => {
        const result = groupItemsBySlot([]);

        expect(Object.keys(result)).toHaveLength(0);
    });

    it("does not mutate the input object", () => {
        const items = [
            {
                id: "A",
                name: "Helm A",
                slotId: "HELM",
                currency: { id: "HONOR", amount: 100 },
                seasonId: "SEASON_1",
            },
        ] satisfies ItemEntity[];

        const clone = structuredClone(items);

        groupItemsBySlot(items);

        expect(items).toEqual(clone);
    });

    it("only creates keys for slots that appear in the input", () => {
        const items = [
            {
                id: "A",
                name: "Helm A",
                slotId: "HELM",
                currency: { id: "HONOR", amount: 100 },
                seasonId: "SEASON_1",
            },
        ] satisfies ItemEntity[];

        const result = groupItemsBySlot(items);

        expect(result).toHaveProperty("HELM");
        expect(result).not.toHaveProperty("OFFHAND");
    });

    it("preserves the original item order within each slot", () => {
        const items = [
            {
                id: "A",
                name: "Helm A",
                slotId: "HELM",
                currency: { id: "HONOR", amount: 100 },
                seasonId: "SEASON_1",
            },
            {
                id: "B",
                name: "Helm B",
                slotId: "HELM",
                currency: { id: "HONOR", amount: 200 },
                seasonId: "SEASON_1",
            },
        ] satisfies ItemEntity[];

        const result = groupItemsBySlot(items);

        expect(result.HELM.map((i) => i.id)).toEqual(["A", "B"]);
    });

    it("accepts all valid GearSlotId values", () => {
        const allSlots: GearSlotId[] = [
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

        const items = allSlots.map((slotId, i) => {
            return {
                id: `item${String(i)}`,
                name: `Item ${String(i)}`,
                slotId,
                currency: { id: "HONOR", amount: 100 },
                seasonId: "SEASON_1",
            };
        }) satisfies ItemEntity[];

        const result = groupItemsBySlot(items);

        for (const slotId of allSlots) {
            expect(result[slotId]).toHaveLength(1);
        }
    });
});
