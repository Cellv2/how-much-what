import { describe, expect, it } from "vitest";
import { BATTLEGROUND_MARK } from "./battleground-mark.data";
import { getBattlegroundMarkById } from "./battleground-mark.selectors";

describe("getBattlegroundMarkById", () => {
    it("should return the correct battleground mark for each ID", () => {
        for (const bgMark of Object.values(BATTLEGROUND_MARK)) {
            const result = getBattlegroundMarkById(bgMark.id);

            expect(result).toEqual(bgMark);
        }
    });
});
