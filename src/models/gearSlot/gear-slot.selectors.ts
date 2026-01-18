import { GEAR_SLOT } from "./gear-slot.data";

export const getGearSlotNames = (): string[] => {
    return Object.values(GEAR_SLOT).map((slot) => slot.name);
};
