import { CURRENCY } from "../currency";
import type { GearSlotId } from "../gearSlot";
import type { ArenaSeasonId } from "../season";
import { ITEMS } from "./item.data";
import type { ItemCostSummaryValue, ItemEntity } from "./item.types";
import { groupItemsBySlot } from "./item.utils";

export const getItemsForArenaSeasonId = (
    seasonId: ArenaSeasonId
): ItemEntity[] => {
    return Object.values(ITEMS).filter((item) => item.seasonId === seasonId);
};

export const getItemsBySlot: Record<GearSlotId, ItemEntity[]> =
    groupItemsBySlot(ITEMS);

export const calculateTotalItemCosts = (
    items: ItemEntity[]
): ItemCostSummaryValue => {
    const vals = items.reduce<ItemCostSummaryValue>(
        (acc, curr) => {
            const { currency, battlegroundMarks } = curr;
            const { amount, id } = currency;

            if (id === CURRENCY.HONOR.id) {
                acc["honor"] += amount;
            }

            if (id === CURRENCY.ARENA.id) {
                acc["arena"] += amount;
            }

            if (!battlegroundMarks) {
                return acc;
            }

            acc.badges.AB += battlegroundMarks.AB ?? 0;
            acc.badges.AV += battlegroundMarks.AV ?? 0;
            acc.badges.EOTS += battlegroundMarks.EOTS ?? 0;
            acc.badges.WSG += battlegroundMarks.WSG ?? 0;

            return acc;
        },
        {
            arena: 0,
            badges: { AB: 0, AV: 0, EOTS: 0, WSG: 0 },
            honor: 0,
        } satisfies ItemCostSummaryValue
    );

    return vals;
};
