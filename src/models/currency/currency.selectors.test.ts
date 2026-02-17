import { describe, expect, it } from "vitest";
import { CURRENCY } from "./currency.data";
import { getCurrencyById } from "./currency.selectors";

describe("getCurrencyById", () => {
    it("should return the correct currency for each ID", () => {
        for (const currency of Object.values(CURRENCY)) {
            const result = getCurrencyById(currency.id);

            expect(result).toEqual(currency);
        }
    });
});
