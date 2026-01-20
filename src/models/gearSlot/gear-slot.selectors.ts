import { GEAR_SLOT } from "./gear-slot.data";
import type { GearSlotId, GearSlotName } from "./gear-slot.types";

export const getGearSlotIds = (): GearSlotId[] => {
    return Object.values(GEAR_SLOT).map((slot) => slot.id);
};

export const getGearSlotNames = (): GearSlotName[] => {
    return Object.values(GEAR_SLOT).map((slot) => slot.name);
};
