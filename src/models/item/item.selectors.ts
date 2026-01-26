import type { GearSlotId } from "../gearSlot";
import type { ArenaSeasonId } from "../season";
import { ITEMS } from "./item.data";
import type { ItemEntity } from "./item.types";
import { groupItemsBySlot } from "./item.utils";

export const getItemsForArenaSeasonId = (
    seasonId: ArenaSeasonId
): ItemEntity[] => {
    return Object.values(ITEMS).filter((item) => item.seasonId === seasonId);
};

export const getItemsBySlot: Record<GearSlotId, ItemEntity[]> =
    groupItemsBySlot(ITEMS);
