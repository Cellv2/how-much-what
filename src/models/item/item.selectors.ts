import type { GearSlotId } from "../gearSlot";
import type { ArenaSeasonId } from "../season";
import { ITEM } from "./item.data";
import type { ItemEntity } from "./item.types";
import { groupItemsBySlot } from "./item.utils";

export const getItemsForArenaSeasonId = (
    seasonId: ArenaSeasonId
): ItemEntity[] => {
    return Object.values(ITEM).filter((item) => item.seasonId === seasonId);
};

export const getItemsBuSlot: Record<GearSlotId, ItemEntity[]> =
    groupItemsBySlot(ITEM);
