import type { GearSlotId } from "../gearSlot";
import type { ItemEntity } from "./item.types";

export const groupItemsBySlot = (
    items: ItemEntity[]
): Record<GearSlotId, ItemEntity[]> => {
    const grouped = Object.values(items).reduce<
        Partial<Record<GearSlotId, ItemEntity[]>>
    >((acc, item) => {
        const key = item.slotId;
        (acc[key] ||= []).push(item);
        return acc;
    }, {});

    return grouped as Record<GearSlotId, ItemEntity[]>;
};
