import { describe, expect, it } from "vitest";
import { ITEMS } from "./item.data";
import { groupItemsBySlot } from "./item.utils";

describe("groupItemsBySlot with live data", () => {
    it("should group without errors", () => {
        const grouped = groupItemsBySlot(ITEMS);

        expect(Object.keys(grouped).length).toBeGreaterThan(0);
    });

    it("should have a valid slot for each item", () => {
        for (const item of ITEMS) {
            expect(item.slotId).toBeDefined();
        }
    });
});
